import { Section } from "@/components/Section";
import { generateNewMetadata } from "@/utils/generateMetadata";
import { EmailForm } from "./EmailForm";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface IProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  return {
    ...generateNewMetadata({
      title: t('contact'),
      routePathName: "contact",
    }),
  };
}

export default function Contact() {
  const t = useTranslations("Contact");

  const emailFormTranslations = {
    formTrans: {
      contactEmailButtonText: t("form.contact-email-button-text"),
      messageLabel: t("form.message-label"),
      nameLabel: t("form.name-label"),
      requestError: t("form.request-error"),
      requestSuccess: t("form.request-success"),
    },
  };

  return (
    <main>
      <Section>
        <h1>{t("contact-title")}!</h1>

        <EmailForm translations={emailFormTranslations} />
      </Section>
    </main>
  );
}
