import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { blogs, officials, socials } from "../../Constants/socialsData";

export const Socials = () => {
  const [sideImage, setSideImage] = useState("/Socials/none.png");
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const animateTitle = useAnimation();
  const animateLinks = useAnimation();

  useEffect(() => {
    if (inView) {
      animateTitle.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      });
      animateLinks.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5
        }
      });
    } else {
      animateTitle.start({
        y: -100,
        opacity: 0,
      });
      animateLinks.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [inView]);

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

  return (
    <div
      className="page bg-bg_gray flex justify-center items-center relative"
      ref={ref}
    >
      <div className="h-screen w-screen absolute top-0 left-0 z-0 bg-no-repeat bg-contain bg-right justify-end hidden md:flex">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            className="w-fit relative"
            key={sideImage}
            variants={variants}
            initial="enter"
            animate="stay"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
            }}
          >
            <motion.img
              src={sideImage}
              alt=""
              className="h-full w-auto bg-blend-multiply"
            />
            <div
              className="w-full h-full z-[1] absolute top-0 left-0"
              style={{
                background:
                  "linear-gradient(90deg, rgb(17, 17, 17) 0%, rgba(17,17,17,13%) 60%)",
              }}
            ></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="h-[90%] w-[90%]  flex flex-col z-10">
        <motion.div className="flex-1 flex flex-col gap-10 justify-center">
          <motion.h2
            className="md:text-title text-Mtitle text-white"
            animate={animateTitle}
          >
            Socials
          </motion.h2>
          <div className="flex flex-row justify-start items-center gap-14">
            {socials.map((each) => {
              return (
                <a href={each.link} key={each.id}>
                  <motion.img
                    src={each.icon}
                    animate={animateLinks}
                    whileHover={{
                      scale: 1.1,
                      cursor: "pointer",
                    }}
                    alt=""
                    className="md:h-[75px] h-[40px]"
                    key={each.id}
                    onMouseEnter={() => {
                      setSideImage(each.image);
                    }}
                    onMouseLeave={() => {
                      setSideImage("/Socials/none.png");
                    }}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div className="flex-1 flex flex-col gap-10 justify-center">
          <motion.h2
            className="md:text-title text-Mtitle text-white"
            animate={animateTitle}
          >
            Officials
          </motion.h2>
          <div className="flex flex-row justify-start items-center gap-14">
            {officials.map((each) => {
              return (
                <a href={each.link} key={each.id}>
                  <motion.img
                    src={each.icon}
                    animate={animateLinks}
                    whileHover={{
                      scale: 1.1,
                      cursor: "pointer",
                    }}
                    alt=""
                    className="md:h-[75px] h-[40px]"
                    key={each.id}
                    onMouseEnter={() => {
                      setSideImage(each.image);
                    }}
                    onMouseLeave={() => {
                      setSideImage("/Socials/none.png");
                    }}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div className="flex-1 flex flex-col gap-10 justify-center">
          <motion.h2
            className="md:text-title text-Mtitle text-white"
            animate={animateTitle}
          >
            Blogs
          </motion.h2>
          <div className="flex flex-row justify-start items-center gap-14">
            {blogs.map((each) => {
              return (
                <a href={each.link} key={each.id}>
                  <motion.img
                    src={each.icon}
                    animate={animateLinks}
                    whileHover={{
                      scale: 1.1,
                      cursor: "pointer",
                    }}
                    alt=""
                    className="md:h-[75px] h-[40px]"
                    key={each.id}
                    onMouseEnter={() => {
                      setSideImage(each.image);
                    }}
                    onMouseLeave={() => {
                      setSideImage("/Socials/none.png");
                    }}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
