import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import TimeLine from "../components/TimeLine/TimeLine";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <TimeLine />
      <Footer />
    </Layout>
  );
};

export default Home;
