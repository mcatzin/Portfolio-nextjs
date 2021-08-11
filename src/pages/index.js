import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import TimeLine from "../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <TimeLine />
    </Layout>
  );
};

export default Home;
