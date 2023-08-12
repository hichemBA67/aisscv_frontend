import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Architecture from "./components/Architecture/index";
import Performance from "./components/Performance/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Architecture />
      <Performance />
      <Features />
      <Simple />
      <Trade />
      <Faq />
    </main>
  );
}
