import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

function CoreConcepts () {
    return (
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcept key={element.title} {...element} />
            ))}
          </ul>
        </Section>
    );

}

export default CoreConcepts;