import { useEffect, useRef, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { education, experience } from "../../Constants/experienceData";
import {
  useAnimation,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
export const Experience = () => {
  const [id, setId] = useState(1);
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const animateFromLeft = useAnimation();
  const animateFromRight = useAnimation();
  const animateFromBottom = useAnimation();

  useEffect(() => {
    if (inView) {
      animateFromLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      animateFromRight.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      animateFromBottom.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      animateFromLeft.start({
        x: -100,
        opacity: 0,
      });
      animateFromRight.start({
        x: 100,
        opacity: 0,
      });
      animateFromBottom.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div
      className="page text-subtext bg-bg_gray text-white flex justify-center items-center"
      ref={ref}
    >
      <div className=" w-[90%] h-[85%] flex flex-col">
        <div className="flex flex-col  flex-1">
          <motion.h2
            className="text-white md:text-title text-Mtitle flex-1"
            animate={animateFromLeft}
          >
            Work Experience
          </motion.h2>
          <div className="h-full flex w-full md:flex-row flex-col justify-evenly">
            <div className="flex items-center justify-center w-full max-w-[30%]">
              <motion.div animate={animateFromLeft}>
                <MdOutlineArrowBackIos
                  className={
                    id > 1
                      ? "text-title cursor-pointer"
                      : "text-title cursor-pointer text-fg_gray"
                  }
                  onClick={() => {
                    console.log("prev");
                    id > 1 && setId((prev) => prev - 1);
                  }}
                />
              </motion.div>
              <motion.p className="text-subtext" animate={animateFromBottom}>
                {id}/{experience.length}
              </motion.p>
              <motion.div animate={animateFromRight}>
                <MdArrowForwardIos
                  className={
                    id < experience.length
                      ? "text-title cursor-pointer"
                      : "text-title cursor-pointer text-fg_gray"
                  }
                  onClick={() => {
                    console.log("next");
                    id < experience.length && setId((prev) => prev + 1);
                  }}
                />
              </motion.div>
            </div>
            <div className="flex w-full justify-center items-center gap-10">
              <AnimatePresence initial={false}>
                <motion.img
                  src={experience[id - 1].logo}
                  alt=""
                  className="md:h-[125px] h-[70px]"
                  animate={animateFromLeft}
                />
              </AnimatePresence>
              <AnimatePresence initial={false}>
                <motion.div>
                  <motion.h2
                    className="md:text-title text-Mtitle"
                    animate={animateFromRight}
                  >
                    {experience[id - 1].name}
                  </motion.h2>
                  <motion.p
                    className="md:text-subtext text-Msubtext"
                    animate={animateFromRight}
                  >
                    {experience[id - 1].join} - {experience[id - 1].leave}
                  </motion.p>
                  <motion.p
                    className="md:text-subtext text-Msubtext"
                    animate={animateFromRight}
                  >
                    {experience[id - 1].profile}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <motion.h2
            className="text-white md:text-title text-Mtitle flex-1 h-max"
            animate={animateFromLeft}
          >
            Education
          </motion.h2>
          <div className="h-full flex flex-3 justify-evenly items-center flex-col md:flex-row">
            {education.map((each) => {
              return (
                <div className="flex h-fit w-fit">
                  <div className="flex justify-center items-center h-fit w-fit">
                    <h1 className="text-fg_gray md:text-[55px] h-full text-[30px] transform translate-x-[0.5em] md:translate-y-[33px] translate-y-[10px] rotate-[-0.25turn]">
                      {each.year}
                    </h1>
                  </div>
                  <motion.div
                    animate={animateFromRight}
                    className="leading-tight"
                  >
                    <div className="text-white font-normal md:text-subtext text-Mtitle">
                      {each.title}
                    </div>
                    <div className="text-fg_gray md:text-subtext text-Msubtext font-normal">
                      {each.branch}
                    </div>
                    <div className="text-white md:text-subtext text-Msubtext font-normal">
                      {each.subtitle}
                    </div>
                    <div className="text-white md:text-subtext text-Msubtext font-normal">
                      STPI 9.7/10
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
