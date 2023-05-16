import Header from "@/Components/Layout/Header";
import { Hero } from "@/Components/sections/Hero";
import { font } from "@/Components/Layout/theme";
import { Whyus } from "@/Components/sections/Whyus";
import { ContactUs } from "@/Components/sections/ContactUs/ContactUs";
import { OurStory } from "@/Components/sections/Ourstory";
import { Projects } from "@/Components/sections/Projects/Projects";
import { Circle } from "@/Components/sections/CircleMarble/Circle";
export default function Home() {
  return (
    <>
      <Header />
      <main className={font.className}>
        <Hero />
        <Whyus />
        <Circle />
        <Projects />
        <OurStory />
        <ContactUs />
      </main>
    </>
  );
}
