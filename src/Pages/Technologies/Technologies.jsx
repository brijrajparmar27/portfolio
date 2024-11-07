import { motion, useScroll, useTransform } from 'framer-motion';
import { stack, technologies } from '../../Constants/technologiesData';

export const Technologies = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['-650%', '3000%']);

  return (
    <div className="page bg-bg_blue flex justify-center items-center">
      <div className="h-full w-full relative">
        <div className="h-full w-full absolute top-0 left-0">
          <div className="h-full w-full relative">
            {technologies?.map((each) => {
              return (
                <motion.p
                  key={each.id}
                  style={{
                    y,
                    top: `${
                      window.innerWidth >= 768
                        ? each.position.pc.top
                        : each.position.mobile.top
                    }%`,
                    left: `${
                      window.innerWidth >= 768
                        ? each.position.pc.left
                        : each.position.mobile.left
                    }%`,
                  }}
                  className={`absolute z-10 text-fg_muted_blue md:text-Mtitle text-Mtitle`}
                >
                  {each.label}
                </motion.p>
              );
            })}
          </div>
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          <div className="h-full w-full relative">
            <div className="absolute h-full w-full flex justify-evenly items-center flex-col md:flex-row z-50">
              {stack?.map((each) => {
                return (
                  <motion.img
                    key={each.id}
                    drag
                    dragConstraints={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: 'grabbing' }}
                    src={each.url}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    alt=""
                    className="md:h-[100px] h-[70px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
