// Landing page

import Card from "./Components/Card";
import Card1 from "./Components/Card1";
import Comp1 from "./Components/Comp1";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
import MobileHero from "./Components/MobileHero";

export default function Home(){
  return(
    <div>
      <div className="lg:block hidden">
      <Hero />
      </div>

      <div className="lg:hidden block ">
      <MobileHero  />
      </div>

      <Comp1 />
      
      <Card />

      <Card1 />

      <Join />

    </div>
  )
}