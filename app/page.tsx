import Method from "@/components/ Method";
import Beta from "@/components/Beta";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import SectionGrid from "@/components/SectionGrid";
import SocialProof from "@/components/SocialProof";
import { buttons } from "@/lib/dummyData";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <SectionGrid />
      <Method pillText="Guide coming soon" />
      <CallToAction
        title="One place for all your photos"
        description="Finally, a photo management solution that developers, designers, and marketing teams can agree on."
        buttons={buttons}
      />
      <Beta
        highlightText="Now in Public Beta"
        title="Ready to give Raster a try?"
        description="Raster is a digital asset manager for modern teams, saving time organizing, editing, and hosting photography."
        image="/images/beta-image.png"
        imageAlt="Beta image"
        buttons={buttons}
      />
    </>
  );
}
