import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
    </Layout>
  );
};

export default Home;
