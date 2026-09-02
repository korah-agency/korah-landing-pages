"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { contactTopics } from "@/lib/validation";
import { ArrowRight } from "@/components/ui/Icons";
import { Field, FormStatus, Honeypot, errorText, type FieldErrors } from "./fields";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const params = useSearchParams();
  const presetTopic = params.get("topic");
  const initialTopic = contactTopics.includes(presetTopic as (typeof contactTopics)[number])
    ? (presetTopic as (typeof contactTopics)[number])
    : "general";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const messages = {
    required: dict.forms.required,
    invalidEmail: dict.forms.invalidEmail,
    tooShort: dict.forms.tooShort,
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: data.consent === "on",
          locale,
          source: window.location.pathname,
        }),
      });

      if (response.ok) {
        setStatus("success");
        track(AnalyticsEvent.formSubmit, { form: "contact", topic: String(data.topic) });
        form.reset();
        return;
      }

      const payload = (await response.json().catch(() => null)) as
        | { fields?: FieldErrors }
        | null;
      setErrors(payload?.fields ?? {});
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormStatus
        state="success"
        success={{ title: dict.forms.successTitle, body: dict.forms.successBody }}
        error={{ title: dict.forms.errorTitle, body: dict.forms.errorBody }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-6">
      <Honeypot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={dict.forms.name} error={errorText(errors.name, messages)}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field id="email" label={dict.forms.email} error={errorText(errors.email, messages)}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field
          id="company"
          label={dict.forms.company}
          optional
          optionalLabel={dict.forms.optional}
        >
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="field"
          />
        </Field>

        <Field id="topic" label={dict.forms.topic}>
          <select id="topic" name="topic" defaultValue={initialTopic} className="field">
            {contactTopics.map((topic) => (
              <option key={topic} value={topic} className="bg-ink-800">
                {dict.forms.topics[topic]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="subject" label={dict.forms.subject} optional optionalLabel={dict.forms.optional}>
        <input id="subject" name="subject" type="text" className="field" />
      </Field>

      <Field id="message" label={dict.forms.message} error={errorText(errors.message, messages)}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="field resize-y"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-mist-400">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#F280B0]"
        />
        <span>{dict.forms.consent}</span>
      </label>

      {status === "error" ? (
        <FormStatus
          state="error"
          success={{ title: dict.forms.successTitle, body: dict.forms.successBody }}
          error={{ title: dict.forms.errorTitle, body: dict.forms.errorBody }}
        />
      ) : null}

      <div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          {status === "sending" ? dict.forms.sending : dict.forms.submitContact}
          <ArrowRight className="btn-arrow" />
        </button>
      </div>
    </form>
  );
}
