import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  // Global style components
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        My passion for developing is unmatched. Every day I wake up pumped to
        collaborate, design, and code. I love every aspect of problem-solving
        with full-stack development.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
