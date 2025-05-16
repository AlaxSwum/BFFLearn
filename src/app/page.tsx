import HeroSection from '@/components/home/HeroSection';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import VisionMission from '@/components/home/VisionMission';
import SuccessStories from '@/components/home/SuccessStories';
import CallToAction from '@/components/home/CallToAction';
import BonaFideBlog from '@/components/home/BonaFide-Blog';
import PartnersSponsors from '@/components/home/PartnersSponsors';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSponsors />
      <VisionMission />
      <WhatWeOffer />
      <SuccessStories />
      <BonaFideBlog />
      <CallToAction />
    </main>
  );
}
