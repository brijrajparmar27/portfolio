import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
// import cloudsLayer from "../../Assets/clouds.png";

export const Introduction = () => {
  const titleVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.3,
      },
    },
  };
  const globeEl = useRef();

  function mapValueToRange(
    originalValue,
    originalMin,
    originalMax,
    newMin,
    newMax
  ) {
    const sf = (newMax - newMin) / (originalMax - originalMin);
    const of = newMin - originalMin * sf;
    return originalValue * sf + of;
  }

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const globe = globeEl.current;
    const handleMouseMove = (event) => {
      // setMousePos({ x: event.clientX, y: event.clientY });
      console.log({
        x: event.clientX,
        y: event.clientY,
        totalWidth: width,
        totalHeight: height,
      });
      globe.pointOfView({
        lng: mapValueToRange(event.clientX, 0, width, 90, -90),
        lat: mapValueToRange(event.clientY, 0, height, -90, 90),
        altitude: 2.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableZoom = false;

    // Add clouds sphere
    const CLOUDS_IMG_URL = "/clouds.png"; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);

  return (
    <div className="page flex justify-center items-center flex-col text-white bg-black relative">
      <div className="h-full w-full absolute top-0 left-0 z-0">
        <Globe
          ref={globeEl}
          animateIn={false}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          onZoom={() => {}}
        />
      </div>
      <motion.div
        className="p-5 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-Cantata text-[50px] w-min md:text-[150px] leading-none"
          variants={titleVariants}
        >
          BRIJRAJSINH PARMAR
        </motion.h1>
        <motion.p
          className="md:text-subtext text-[20px]"
          variants={titleVariants}
        >
          I craft digital solutions that bring ideas to life.
        </motion.p>
      </motion.div>
    </div>
  );
};
