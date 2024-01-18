import { Section } from "@/components/Section";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({
    title: "Contato",
    routePathName: "contact",
  }),
};

export default function Contact() {
  return (
    <main>
      <Section>
        <h1>Developing...</h1>
      </Section>
    </main>
  );
}