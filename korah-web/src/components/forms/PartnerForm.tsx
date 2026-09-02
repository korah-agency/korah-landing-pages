"use client";

import { useState, type FormEvent } from "react";

import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { partnerTypes } from "@/lib/validation";
import { ArrowRight } from "@/components/ui/Icons";
import { Field, FormStatus, Honeypot, errorText, type FieldErrors } from "./fields";

type Status = "idle" | "sending" | "success" | "error";

export function PartnerForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
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
      const response = await fetch("/api/partners", {
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
        track(AnalyticsEvent.formSubmit, {
          form: "partners",
          partnerType: String(data.partnerType),
        });
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
        <Field id="p-name" label={dict.forms.name} error={errorText(errors.name, messages)}>
          <input
            id="p-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "p-name-error" : undefined}
          />
        </Field>

        <Field id="p-email" label={dict.forms.email} error={errorText(errors.email, messages)}>
          <input
            id="p-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "p-email-error" : undefined}
          />
        </Field>

        <Field
          id="p-company"
          label={dict.forms.company}
          error={errorText(errors.company, messages)}
        >
          <input
            id="p-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className="field"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "p-company-error" : undefined}
          />
        </Field>

        <Field id="p-role" label={dict.forms.role} optional optionalLabel={dict.forms.optional}>
          <input
            id="p-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className="field"
          />
        </Field>
      </div>

      <Field id="p-type" label={dict.forms.partnerType}>
        <select id="p-type" name="partnerType" defaultValue="strategic" className="field">
          {partnerTypes.map((type) => (
            <option key={type} value={type} className="bg-ink-800">
              {dict.forms.partnerTypes[type]}
            </option>
          ))}
        </select>
      </Field>

      <Field id="p-message" label={dict.forms.message} error={errorText(errors.message, messages)}>
        <textarea
          id="p-message"
          name="message"
          required
          rows={6}
          className="field resize-y"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "p-message-error" : undefined}
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
          {status === "sending" ? dict.forms.sending : dict.forms.submitPartner}
          <ArrowRight className="btn-arrow" />
        </button>
      </div>
    </form>
  );
}
