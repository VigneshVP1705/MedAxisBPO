import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Process from '@/sections/Process';
import Industries from '@/sections/Industries';
import WhyChooseUs from '@/sections/WhyChooseUs';
import InterviewSupport from '@/sections/InterviewSupport';
import ProcessTimeline from '@/sections/ProcessTimeline';
import Commitment from '@/sections/Commitment';
import ForEmployers from '@/sections/ForEmployers';
import ForJobSeekers from '@/sections/ForJobSeekers';
import Contact from '@/sections/Contact';
import FinalCTA from '@/sections/FinalCTA';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Industries />
        <WhyChooseUs />
        <InterviewSupport />
        <ProcessTimeline />
        <Commitment />
        <ForEmployers />
        <ForJobSeekers />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
