import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <div className="w-full relative bg-grey-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar />
      < Component {...pageProps} />;
    </div>
  )
}
