import AboutCareLoop from "./components/aboutcareloops";
import ImageCarousel from "./components/herosection";
import ServiceSection from "./components/servicesection";
import ImageSlider from "./components/Gallery";
import AgeGroup from "./components/agegroup";

export default function Home() {
  return (
    <div >

      {/*Hero section*/}
        <ImageCarousel />
      {/**Feature Section */}
      <ServiceSection/>
      {/**Image Slider */}
      <ImageSlider />
      {/*Agegroup */}
      <AgeGroup/>
      {/**About CareLoops */}
      <AboutCareLoop/>

    </div>
  );
}
