import { motion } from "framer-motion";

import P1 from "../../Assets/Portraits/1.jpeg";
import P2 from "../../Assets/Portraits/2.jpeg";
import P3 from "../../Assets/Portraits/3.jpeg";
import P4 from "../../Assets/Portraits/4.jpeg";
import P5 from "../../Assets/Portraits/5.jpeg";
import P6 from "../../Assets/Portraits/6.jpeg";
import P7 from "../../Assets/Portraits/7.jpeg";
import P8 from "../../Assets/Portraits/8.jpeg";
import P9 from "../../Assets/Portraits/9.jpeg";
import P10 from "../../Assets/Portraits/10.jpeg";
import P11 from "../../Assets/Portraits/11.jpeg";
import P12 from "../../Assets/Portraits/12.jpeg";
import P13 from "../../Assets/Portraits/13.jpeg";
import P14 from "../../Assets/Portraits/14.jpeg";
import P15 from "../../Assets/Portraits/15.jpeg";
import P16 from "../../Assets/Portraits/16.jpeg";
import P17 from "../../Assets/Portraits/17.jpeg";
import P18 from "../../Assets/Portraits/18.jpeg";
import P19 from "../../Assets/Portraits/19.jpeg";
import P20 from "../../Assets/Portraits/20.jpeg";

export const Contact = () => {
  //20 images
  let images = [
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
    P16,
    P17,
    P18,
    P19,
    P20,
  ];

  return (
    <div className="page bg-black sm:bg-bg_blue flex relative">
      <div className="flex-1 absolute top-0 left-0 z-0 sm:relative">
        <div class="grid grid-cols-3 brightness-[15%] sm:brightness-100 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-[-10px]">
          <div class="grid gap-4 h-min">
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P1}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P2}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P3}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P4}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P5}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4 h-min">
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P6}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P7}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P8}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P9}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P10}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4 h-min">
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P11}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P12}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P13}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P14}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P15}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4 h-min">
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P16}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P17}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P18}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P19}
                alt=""
              />
            </div>
            <div>
              <motion.img
                whileHover={{ scale: 0.95 }}
                class="h-auto max-w-full rounded-lg"
                src={P20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  flex justify-center items-center z-10">
        <div className="">
          <h2 className="text-white md:text-title text-Mtitle flex-1 mb-24">
            Get In Touch
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              class="w-full p-2 text-xl border-b-2 outline-none bg-[transparent] text-white"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="w-full p-2 text-xl border-b-2 outline-none bg-[transparent] text-white"
              placeholder="Email"
            />
            <input
              type="text"
              class="w-full p-2 text-xl border-b-2 outline-none bg-[transparent] text-white"
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className="w-full p-2 text-xl border-2 rounded-xl outline-none bg-[transparent] text-white mt-10"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
