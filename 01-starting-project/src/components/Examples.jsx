import React, { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

import TabButton from "./TabButton.jsx";

function Examples() {
    // const [tabContent, setTabContent] = useState('Please click a button');
    const [tabContent, setTabContent] = useState();
    const tabsNames = [
      {
        name: 'Components',
        value: 'components'
      },
      {
        name: 'JSX',
        value: 'jsx'
      },
      {
        name: 'Props',
        value: 'props'
      },
      {
        name: 'State',
        value: 'state'
      },
    ]

    function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setTabContent(selectedButton);
    }

    const selectedContent = !tabContent ? (
    <p>Please select a topic</p>
    ) : (
    <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
        <code>{EXAMPLES[tabContent].code}</code>
        </pre>
    </div>
    );
    return (
        <Section title="Examples" id="examples">
          <Tabs 
          ButtonsContainer="menu"
          buttons={
            <>
            {tabsNames.map(({name, value}) => (
              <TabButton
              key={value}
              isSelected={tabContent === value}
              onClick={() => handleSelect(value)}
            >
              {name}
            </TabButton>
            ))}
            </>
          }>{selectedContent}</Tabs>
        </Section>
    );
}

export default Examples;