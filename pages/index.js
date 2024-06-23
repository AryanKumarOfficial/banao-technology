import FrameComponent2 from "@/components/Navbar";
import FrameComponent1 from "@/components/frame-component1";
import FrameComponent from "@/components/frame-component";
import Testimonials1 from "@/components/testimonials1";
import Testimonials from "@/components/testimonials";
import End from "@/components/end";
import Footer from "@/components/footer";

const LandingPageSignIn = () => {
  return (
   <>
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent1 />
        <FrameComponent />
        <Testimonials1 />
        <Testimonials />
      </main>
      <End />
      <Footer />
    </>
  );
};

export default LandingPageSignIn;