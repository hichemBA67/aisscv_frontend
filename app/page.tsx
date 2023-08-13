import Banner from "./components/Banner/index";
import UseCase from "./components/UseCase/index";
import Architecture from "./components/Architecture/index";
import Performance from "./components/Performance/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import HPC from "./components/HPC/index";
import Faq from "./components/Faq/index";
import Learnings from "./components/Learnings/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <UseCase />
      <Performance />
      <Architecture />
      <Features />
      <HPC />
      <Faq />
      <Learnings />
      <Simple />
    </main>
  );
}
