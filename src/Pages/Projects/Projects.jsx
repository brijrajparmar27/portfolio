import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";

// import chatroom from "../../Assets/Project/chatroom.png";
// import chatroom1 from "../../Assets/Project/chatroom1.png";
// import thedojo from "../../Assets/Project/thedojo.png";
// import thedojo1 from "../../Assets/Project/thedojo1.png";
// import linkvault from "../../Assets/Project/linkvault.png";
// import linkvault1 from "../../Assets/Project/linkvault1.png";
// import chatsocket from "../../Assets/Project/chatsocket.png";
// import chatsocket1 from "../../Assets/Project/chatsocket1.png";
// import cadre from "../../Assets/Project/cadre.png";
// import cadre1 from "../../Assets/Project/cadre1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { projectList } from "../../Constants/projectsData";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState({});
  useEffect(() => {
    handleSwipe(0);
  }, []);

  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  const handleSwipe = (currentIndex) => {
    setCurrentSlide(projectList.find((each) => each.id == currentIndex));
  };

  const variants = {
    enter: {
      opacity: 0,
    },
    stay: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const projectDetailsVariants = {
    enter: {
      opacity: 0,
      y: -100,
    },
    stay: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <div className="page flex flex-col justify-evenly projects_page relative">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentSlide.id}
          src={currentSlide.secondaryImg}
          className="absolute bgimg top-0 left-0 h-screen w-screen bg_contain object-cover z-0"
          style={{
            // backgroundImage: `url(${currentSlide.secondaryImg})`,
            filter: "blur(5px)",
            transform: "scale(1.1)",
          }}
          variants={variants}
          initial="enter"
          animate="stay"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
        />
      </AnimatePresence>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          className="flex flex-col justify-center items-center z-10"
          key={currentSlide.id}
          variants={projectDetailsVariants}
          initial="enter"
          animate="stay"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
        >
          <h2
            className="text-Mtitle md:text-title"
            style={{ color: currentSlide.dark ? "white" : "black" }}
          >
            {currentSlide.title}
          </h2>
          <p
            className="text-Msubtext md:text-subtext"
            style={{ color: currentSlide.dark ? "white" : "black" }}
          >
            {currentSlide.subheading}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="swiper_contain z-10">
        <Swiper
          onSlideChange={(e) => {
            console.log(e.activeIndex);
            handleSwipe(e.activeIndex);
          }}
          // slidesPerView={3}
          spaceBetween={10}
          slidesPerView={"auto"}
          centeredSlides={true}
          // freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {/* {projectList.map((project) => {
            return (
              <SwiperSlide
                key={project.id}
                style={{ backgroundImage: `url(${currentSlide.primaryImg})` }}
              ></SwiperSlide>
            );
          })} */}
          <SwiperSlide
            // key={project.id}
            style={{ backgroundImage: `url('/Project/thedojo.png')` }}
          ></SwiperSlide>
          <SwiperSlide
            // key={project.id}
            style={{ backgroundImage: `url('/Project/chatroom.png')` }}
          ></SwiperSlide>
          <SwiperSlide
            // key={project.id}
            style={{ backgroundImage: `url('/Project/linkvault.png')` }}
          ></SwiperSlide>
          <SwiperSlide
            // key={project.id}
            style={{ backgroundImage: `url('/Project/cadre.png')` }}
          ></SwiperSlide>
          <SwiperSlide
            // key={project.id}
            style={{ backgroundImage: `url('/Project/chatsocket.png')` }}
          ></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
