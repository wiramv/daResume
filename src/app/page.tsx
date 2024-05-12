import Hero from "@/components/home/Hero";
import HomeJob from "@/components/home/HomeJob";
import WhyMe from "@/components/home/WhyMe";
import { Suspense } from "react";

export default function Home() {

  return (
    <div>
      <Hero />
      <WhyMe />
      <Suspense fallback={<p>Loading data</p>}>
        <HomeJob />
      </Suspense>
    </div>
  );
}
