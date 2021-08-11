import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
    </Layout>
  );
};

export default Home;
