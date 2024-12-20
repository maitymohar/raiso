
import { LampContainer } from "../components/ui/lamp"
import { motion } from "framer-motion"
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Nitrutsav = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          <b>NITRUTSAV</b>
          <br />
          <b>Odisha's largest</b> Literary and Cultural Fest organized by <b>NIT Rourkela</b>
        </motion.h1>
      </LampContainer>
      <div  className="min-h-screen w-screen">
      <div className="  relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h1 className="font-bold text-[50px]"><b>ABOUT NITRUTSAV</b></h1>

        <AnimatedTitle
         title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
         containerClass="mt-4 text-4xl !test-black text-center"
        />

        {/* <div className="about-subtext">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, laboriosam animi!</p>
          <p className="text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad, hic rem natus vitae odio error laboriosam corporis!
          </p>
        </div> */}
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/public/img/nitrutsav-about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
       </div>
    </>
  )
}

export default Nitrutsav