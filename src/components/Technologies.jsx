import { RiReactjsLine } from "react-icons/ri";
import { TbBrandPhp} from "react-icons/tb";
import { SiMysql} from "react-icons/si";
import { SiHtml5} from "react-icons/si";
import { SiCss3} from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h1 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity: 0, y:-100}}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">
        Teknolojiler
    </motion.h1>
    <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"> 
        <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine  className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandPhp  className="text-7xl text-blue-400"/>
        </motion.div>

        <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl  "/>
        </motion.div>

        <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className="text-7xl text-orange-400"/>
        </motion.div>

        <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className="text-7xl text-sky-400"/>
        </motion.div>
    </motion.div>
  </div>
  
}

export default Technologies
