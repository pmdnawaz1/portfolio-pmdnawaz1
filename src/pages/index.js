import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import ChatToggle from '../components/ChatToggle/ChatToggle';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <ChatToggle />
    </Layout>
  );
};

export default Home;
