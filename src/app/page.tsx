import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Link from "next/link";

const Home = () => {
  return (
    <div className="space-y-16">
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
  
};

export default Home;
