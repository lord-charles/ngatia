import Image from "next/image";
import backgroundImage from "../public/assets/home-bg-image.png";
import Counter from "./components/countup";
import WhyChooseUs from "./components/whyUs";
import PracticeAreasList from "./practice-areas/areasList";
import MapComponent from "./components/map";
import PracticeAreas from "./practice-areas/practiceAreas";

export default function Home() {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Set the height as needed
    // You can add more styles as needed
  };
  return (
    <main className="-z-10 bg-[#fdfdfd]">
      <div
        className="bg-landing-bg w-screen h-[82vh] lg:h-[90vh] bg-center"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="w-full h-full bg-black opacity-80 px-5 md:px-10">
          <div className="text-gray-50 flex flex-col items-start justify-start lg:justify-center pt-16 lg:pt-0 lg:w-[45vw] h-[100%] lg:ml-auto gap-10 relative">
            <h2 className="md:text-3xl text-xl font-semibold">WE ARE SPECIALISTS IN LEGAL CRIMINAL & BUSINESS LAW</h2>
            <p className="text-sm md:text-base">Eiusmod excepteur voluptate commodo consectetur aliqua amet velit deserunt consectetur non esse nulla. Reprehenderit magna sint cillum deserunt nulla nisi velit sit incididunt duis id consequat ex Lorem. Nostrud non incididunt veniam ullamco non aliqua est in anim do et. Elit magna do in in esse tempor amet. Incididunt ut nostrud fugiat consequat magna voluptate qui labore proident nostrud velit repre. </p>
              <button type="button" className="border border-blue-500 rounded-lg p-2 hover:text-white text-gray-400 cursor-pointer absolute bottom-10  translate-x-[40%] md:translate-x-[130%] lg:translate-x-[100%] text-base md:text-lg">Make an Appointment</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 md:px-10 lg:px-28 py-2 gap-3 md:gap-5">
      {/* <div className="flex flex-col md:flex-row py-5">
        <img src="/assets/lawyer.png" alt="lawyer" className="w-[350px] h-[500px]"/>
        <div className="flex flex-col space-y-5 p-16 items-start justify-center">
          <h2 className="text-2xl">WHY CHOOSE US</h2>
          <p>Enim amet non quis adipisicing aute mollit elit ut consequat esse duis nisi. Do culpa dolore occaecat non exercitation elit ex ad nostrud. Aliquip elit excepteur ullamco labore pariatur tempor duis. Dolore qui ut officia ea ullamco ex laboris excepteur tempor aliquip excepteur minim eiusmod qui. Esse duis anim in magna id. Velit officia deserunt do aliquip ea irure laboris.</p>
        </div>
      </div> */}
      <WhyChooseUs/>
      <PracticeAreas/>
      <MapComponent/>
      <Counter/>
      </div>
    </main>
  );
}
