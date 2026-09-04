import type { Metadata } from "next";

import { AvatarSection } from "@/components/sections/AvatarSection";
import { Dashboard } from "@/components/sections/Dashboard";
import { Differentiation } from "@/components/sections/Differentiation";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForClients } from "@/components/sections/ForClients";
import { ForTailors } from "@/components/sections/ForTailors";
import { FutureSection } from "@/components/sections/FutureSection";
import { AtelierBand } from "@/components/sections/AtelierBand";
import { FabricBand } from "@/components/sections/FabricBand";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Measurements } from "@/components/sections/Measurements";
import { NewWay } from "@/components/sections/NewWay";
import { TryFree } from "@/components/sections/TryFree";
import { Privacy } from "@/components/sections/Privacy";
import { Problem } from "@/components/sections/Problem";
import { Profiles } from "@/components/sections/Profiles";
import { Proof } from "@/components/sections/Proof";
import { Technology } from "@/components/sections/Technology";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhySurMeZur } from "@/components/sections/WhySurMeZur";
import { InlineCta } from "@/components/ui/InlineCta";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
  };
}

export default async function Home({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <Hero locale={active} dict={dict} />
      <AtelierBand dict={dict} />
      <TrustStrip dict={dict} />
      <Problem dict={dict} />
      <NewWay dict={dict} />
      <HowItWorks dict={dict} />
      <InlineCta text={dict.inlineCta.ready} cta={dict.inlineCta.readyCta} />
      <Technology dict={dict} />
      <Measurements dict={dict} />
      <Dashboard dict={dict} />
      <Profiles dict={dict} />
      <ForTailors dict={dict} />
      <ForClients dict={dict} />
      <InlineCta text={dict.inlineCta.firstProfile} cta={dict.inlineCta.firstProfileCta} />
      <AvatarSection dict={dict} />
      <FutureSection dict={dict} />
      <WhySurMeZur dict={dict} />
      <Differentiation dict={dict} />
      <FabricBand dict={dict} />
      <InlineCta text={dict.inlineCta.join} cta={dict.inlineCta.joinCta} />
      <Proof dict={dict} />
      <Privacy dict={dict} />
      <TryFree locale={active} dict={dict} />
      <Faq dict={dict} />
      <FinalCta locale={active} dict={dict} />
    </>
  );
}