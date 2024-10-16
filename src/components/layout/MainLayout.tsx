// import { Outlet } from "react-router-dom";
// import { ReactNode, useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import reactIcon from "../../assets/icons/react.svg";
// import { ISourceOptions } from "@tsparticles/engine";
// import HeaderComp from "../header/HeaderComp";
// import Hero from "@/pages/hero/Hero";
// import Technologies from "../technologies/Technologies";
// import Parallax from "../parallax/Parallax";
// import FooterComp from "../footer/FooterComp";

// interface MainLayoutProps {
//   children: ReactNode;
// }

// const MainLayout = ({ children }: MainLayoutProps) => {
//   const [init, setInit] = useState(false);

//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       //await loadAll(engine);
//       //await loadFull(engine);
//       await loadSlim(engine);
//       //await loadBasic(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const options: ISourceOptions = useMemo(
//     () => ({
//       // background: {
//       //     color: {
//       //         value: "#0d47a1",
//       //     },
//       // },
//       background: {
//         image: "",
//         position: "50% 50%",
//         repeat: "no-repeat",
//         size: "cover",
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//           resize: {
//             enable: true,
//             delay: 0.5,
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#aaa",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//             // area: 800,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "image",
//           image: [
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             // {
//             //   "src": mysqlIcon,
//             //   "width": 20,
//             //   "height": 20
//             // },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//             // {
//             //   "src": vscodeIcon,
//             //   "width": 20,
//             //   "height": 20
//             // },
//             {
//               src: reactIcon,
//               width: 20,
//               height: 20,
//             },
//           ],
//           polygon: {
//             sides: 5,
//           },
//           stroke: {
//             color: "#000000",
//             width: 0,
//           },
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );
//   return (
//     <main className="relative space-y-12">
//       <>{init && <Particles id="tsparticles" options={options} />}</>
//       <HeaderComp />
//       <Hero />
//       <Technologies />
//       {children}

//       <Parallax />
//       <FooterComp />
//     </main>
//   );
// };

// export default MainLayout;
