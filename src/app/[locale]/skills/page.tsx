import { Section } from "@/components/Section";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({
    title: "Habilidades",
    routePathName: "skills",
  }),
};

export default function Skills() {
  return (
    <main>
      <Section>
        <h1>In progress...</h1>
      </Section>
    </main>
  );
}