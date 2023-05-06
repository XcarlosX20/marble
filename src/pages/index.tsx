import Header from "@/Components/Layout/Header";
import { Hero } from "@/Components/sections/Hero";
import { font } from "@/Components/Layout/theme";
import { Whyus } from "@/Components/sections/Whyus";
import { ContactUs } from "@/Components/sections/ContactUs";
export default function Home() {
  return (
    <>
      <Header />
      <main className={font.className}>
        <Hero />
        <Whyus />
        <ContactUs />
      </main>
    </>
  );
}
