import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
