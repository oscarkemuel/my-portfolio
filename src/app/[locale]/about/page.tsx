import { Section } from "@/components/Section";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({
    title: "Sobre",
    routePathName: "about",
  }),
};

export default function About() {
  return (
    <main>
      <Section>
        <h1>In progress...</h1>
      </Section>
    </main>
  );
}
