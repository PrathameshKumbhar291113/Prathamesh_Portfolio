import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-aut h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Prathamesh K.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Self-taught Android Developer with over 2 years of experience in
              Java and Kotlin. Proficient in developing user-friendly mobile
              applications, writing high-quality code, and skilled in Agile
              development, debugging and bug-fixing.
            </p>

            {/*buttons and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transistion-all duration-500"
                />
              </div>
            </div>
          </div>

          {/*image*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;