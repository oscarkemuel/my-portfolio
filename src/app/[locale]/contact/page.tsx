import { Section } from "@/components/Section";
import { generateMetadata } from "@/utils/generateMetadata";
import { EmailForm } from "./EmailForm";
import { useTranslations } from "next-intl";

export const metadata = {
  ...generateMetadata({
    title: "Contato",
    routePathName: "contact",
  }),
};

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
