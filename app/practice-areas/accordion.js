"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="w-[95vw] lg:w-auto">
      <motion.header
        className="bg-[#0055ff] text-sm md:text-base lg:text-lg rounded-lg text-white text-center cursor-pointer my-1 md:my-2 p-2 w-[100%]"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {i.title}
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            className="ml-4"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {i.data.map((item, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {item.text}
                </p>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Example = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="flex flex-col lg:w-[50%]">
      <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">FAQs</h2>
      {objects.map((i) => (
        <Accordion
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
          key={i.id}
        />
      ))}
    </div>
  );
  // return
  // objects.map((i) => (
  //   <motion.header className="bg-[#0055ff] rounded-lg text-white text-center cursor-pointer h-[40px] mb-[20px] w-[50%]"
  //   initial={false}
  //   animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
  //   onClick={() => setExpanded(isOpen ? false : i)}></motion.header>))
};

const accordionIds = [0, 1, 2, 3];
const objects = [
  {
    id: 1,
    title: "How long does the client have to file their claim?",
    data: [
      {
        id: 1,
        text: "Intellectual property",
      },
      {
        id: 2,
        text: "Corporate Law",
      },
      {
        id: 3,
        text: "Tax Law",
      },
      {
        id: 4,
        text: "Corporate Finance",
      },
    ],
  },
  {
    id: 2,
    title: "What does the client need to bring through the initial consultation?",
    data: [
      { id: 1, text: "Employment Law" },
      {
        id: 2,
        text: "Commercial Law",
      },
      {
        id: 3,
        text: "Tax Law",
      },
    ],
  },
  {
    id: 3,
    title: "What types of criminal charges can you defend against?",
    data: [
      { id: 1, text: "Dispute Resolution" },
      {
        id: 2,
        text: "Arbitration and Mediation",
      },
      {
        id: 3,
        text: "Immigration",
      },
    ],
  },
  {
    id: 4,
    title: "What is the process for filing a personal injury claim?",
    data: [
      { id: 1, text: "Commercial Law" },
      {
        id: 2,
        text: "Complex Litigation",
      },
      {
        id: 3,
        text: "Insolvency",
      },
      {
        id: 4,
        text: "Bankruptcy",
      },
    ],
  },
  {
    id: 5,
    title: "How much do you charge for your services?",
    data: [
      { id: 1, text: "Commercial Law" },
      {
        id: 2,
        text: "Complex Litigation",
      },
      {
        id: 3,
        text: "Insolvency",
      },
      {
        id: 4,
        text: "Bankruptcy",
      },
    ],
  },
];
