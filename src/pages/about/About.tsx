import mee from "../../assets/img/about/se.jpg";
import resume from "../../assets/resume/bishal_software_dev.pdf";
import "./about.css";
import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative  min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/95 via-foreground/80 to-foreground/95 z-10">
          <img
            src={mee}
            alt="Developer working"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-10"
      />
      <motion.div
        style={{ y: imageY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl z-10"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto max-w-4xl relative z-20"
      >
        <div className="bg-background/60 backdrop-blur-xl rounded-3xl border border-accent/20 shadow-2xl">
          <div className="space-y-8 text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="about relative text-center ">
                <h2 className="my-2 pt-4 text-center relative text-5xl font-bold z-10 inline-block text-black">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#0000005a] text-8xl">
                    02
                  </span>
                  About Myself
                </h2>
              </div>
            </motion.div>

            {/* Profile image with badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative inline-block"
            >
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                <img
                  src={mee}
                  alt="Bishal Karki - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 whitespace-nowrap"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for Work
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2 px-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              <p className="text-pretty">
                My name is{" "}
                <span className="text-foreground font-semibold">
                  Bishal Karki
                </span>
                , a graduated student of Bachelor of Information Technology. I
                am a passionate full-stack developer with expertise in creating
                beautiful and user-friendly websites and web applications.
              </p>

              <p className="text-pretty">
                I love to design and create responsive websites or web apps from
                scratch. The technologies, tools, and languages I use to build
                my projects include{" "}
                <span className="text-foreground font-semibold">
                  React.js, Next.js, TypeScript, Node.js, Tailwind CSS, MongoDB
                </span>
                , and many more modern web technologies.
              </p>

              <p className="text-pretty">
                I have an eagerness to learn something new every day and I love
                to share my knowledge with fellow developers. Whether
                you&apos;re a startup, business, or individual, I can help bring
                your ideas to life with end-to-end solutions.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="py-6"
            >
              <div className="resume">
                <a href={resume} download="resume-of-bishal-karki">
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
    // <section
    //   className="react-parallax relative overflow-hidden w-full pr-20 pl-20"
    //   id="about"
    // >
    //   <img
    //     src={mee}
    //     alt="mee __main-img "
    //     className="parallax-img __main-img"
    //     loading="eager"
    //   />
    //   <div className="react-parallax-content relative">
    //     <div className="parallax-container">
    //       <div className="about relative text-center ">
    //         <h2 className="mb-12 text-center relative text-5xl font-bold z-10 inline-block">
    //           <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#8a8a8a5a] text-8xl">
    //             02
    //           </span>
    //           About Myself
    //         </h2>
    //       </div>
    //       <div className="m-0 mx-auto max-w-screen-lg ">
    //         <div className="flex items-center justify-between max-[950px]:flex-col flex-row gap-4 w-full">
    //           <div className="img-side relative ">
    //             <img src={wEmoji} alt="emoji" className="work-emoji" />
    //             <span>
    //               <img src={text} alt="text" />
    //             </span>
    //           </div>
    //           <div className="text-side max-[950px]:text-center max-[950px]:w-[80%]">
    //             <div className="styled-paragraph">
    //
    //               My name is Bishal Karki, graduated student of Bachelor of
    //               Information Technology. I am an aspiring front-end developer
    //               with a passion for creating beautiful and user-friendly
    //               websites.
    //             </div>
    //             <div className="styled-paragraph">
    //               I love to design and create responsive websites or web apps
    //               from scratch. The technologies, tools and languages I am using
    //               to build my projects are HTML, CSS, JavaScript, REACT JS,
    //               Bootstrap, Git and GitHub, Figma, and VS Code.
    //             </div>
    //             <div className="para-3 styled-paragraph">
    //
    //               I have eagerness to learn something new every day and I love
    //               to share my knowledge to my fellow front-end developers. And I
    //               am looking forward to talk with you!
    //             </div>

    //             <div className="resume">
    //               <a href={resume} download="resume-of-bishal-karki">
    //                 Download Resume
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
