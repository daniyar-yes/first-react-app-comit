import Heading from "./Heading";
import Section from "./Section";

export default function ContextPage() {
  return (
    <div style={{ marginTop: "3em" }}>
      <Section level={1}>
        <Heading>Title</Heading>
        <section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>

          <Section level={6}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </section>
          </Section>
        </section>
      </Section>
    </div>
  );
}
