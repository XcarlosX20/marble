import {Circle} from '@/Components/Carousel/Circle'
import Header from '@/Components/Layout/Header'
import { Hero } from '@/Components/sections/Hero'
import {SelectMarble} from '@/Components/sections/SelectMarble'
import { font } from '@/Components/Layout/theme'
import { Whyus } from '@/Components/sections/Whyus'
export default function Home() {
  return (
   <>
   <Header/>
   <main className={font.className}>
      <Hero/>
      <Whyus/>
   </main>
   </>
  )
}
