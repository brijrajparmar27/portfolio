import { motion, useScroll, useTransform } from "framer-motion";
// import Js from "../../Assets/Icons/JS.svg";
// import ReactJs from "../../Assets/Icons/React.svg";
// import Sass from "../../Assets/Icons/Sass.svg";
// import Ts from "../../Assets/Icons/Ts.svg";

export const Technologies = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["-650%", "3000%"]);
  console.log(y);
  return (
    // <ParallaxProvider>
    <div className="page bg-bg_blue flex justify-center items-center">
      <div className="h-full w-full relative">
        <div className="absolute top-0 left-0 h-full w-full flex justify-evenly items-center flex-col md:flex-row z-50">
          <motion.img
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            src={"/Icons/JS.svg"}
            whileHover={{
              scale: 1.1,
              // y: 10,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            alt=""
            className="md:h-[100px] h-[70px]"
          />
          <motion.img
            src={"/Icons/React.svg"}
            alt=""
            className="md:h-[100px] h-[70px]"
            drag
            whileHover={{
              scale: 1.1,
              // y: 10,
            }}
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
          />
          <motion.img
            src={"/Icons/Sass.svg"}
            alt=""
            className="md:h-[100px] h-[70px]"
            drag
            whileHover={{
              scale: 1.1,
              // y: 10,
            }}
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
          />
          <motion.img
            src={"/Icons/Ts.svg"}
            alt=""
            className="md:h-[100px] h-[70px]"
            drag
            whileHover={{
              scale: 1.1,
              // y: 10,
            }}
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
          />
        </div>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[168px] md:left-[149px] text-Mtitle top-[58px] left-[43px]"
        >
          Mongo
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[771px] md:left-[1295px] text-Mtitle top-[103px] left-[267px]"
        >
          Sass
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[692px] md:left-[470px] text-Mtitle top-[208px] left-[28px]"
        >
          Javascript
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[546px] md:left-[319px] text-Mtitle top-[251px] left-[222px]"
        >
          Tailwind
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[195px] md:left-[989px] text-Mtitle top-[302px] left-[275px]"
        >
          Reactjs
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[636px] md:left-[1076px] text-Mtitle top-[397px] left-[71px]"
        >
          Express
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[450px] md:left-[877px] text-Mtitle top-[568px] left-[56px]"
        >
          CSS
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[168px] md:left-[1262px] text-Mtitle top-[588px] left-[222px]"
        >
          Firebase
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[711px] md:left-[144px] text-Mtitle top-[704px] left-[130px]"
        >
          NodeJs
        </motion.p>
        <motion.p
          style={{ y }}
          className="absolute z-10 text-fg_muted_blue md:text-Mtitle md:top-[130px] md:left-[593px] text-Mtitle top-[745px] left-[256px]"
        >
          Typescript
        </motion.p>
      </div>
    </div>
  );
};
