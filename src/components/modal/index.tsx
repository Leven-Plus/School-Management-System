import React, { useEffect, useRef, useState } from "react";
import Card from "../card";
import { LuSearch } from "react-icons/lu";
import "./modal.css";
import { motion, AnimatePresence } from "framer-motion";
import UseKey from "../useKey";

interface ModalProps {
  isOpen: boolean;
  isClose: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modalCloseAction = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let element = e.target as HTMLDivElement;
    if (element.classList.contains("search-modal")) {
      props.isClose(false);
      setSearch("");
    }
  };

  const variantsBackdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const variantsMain = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const [search, setSearch] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    searchRef.current?.focus();
  }, [props.isOpen]);

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variantsBackdrop}
          transition={{ ease: "ease", duration: 0.2 }}
          className="h-[100vh] w-full fixed top-0 left-0 z-50 bg-[#000000]/80 search-modal"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            modalCloseAction(e)
          }
        >
          <UseKey
            pressKey="Escape"
            cb={() => props.isClose(false)}
            disible={false}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variantsMain}
            transition={{ ease: "ease", duration: 0.25 }}
          >
            <Card className="w-[560px] h-[210px] rounded-xl bg-[#d6d6d6] dark:bg-navy-800 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <header className="relative flex items-center justify-between px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-full">
                  <label htmlFor="search-panel">
                    <LuSearch
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "500",
                        color: "#000000",
                        opacity: "0.5",
                      }}
                    />
                  </label>

                  <input
                    id="search-panel"
                    type="text"
                    className="bg-[transparent] placeholder:text-[#000000]/40 placeholder:font-[500] placeholder:text-lg border-0 focus:outline-0 w-full"
                    placeholder="Search Panel"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    ref={searchRef}
                  />
                </div>
                <div
                  className="text-navy-700 rounded-lg bg-[#f4f4f5] px-2 py-1 text-[0.7em] uppercase transition duration-200 dark:bg-white/10 dark:text-white"
                  style={{ letterSpacing: "0.01em" }}
                >
                  ESC
                </div>
              </header>
              <div className="w-full h-[0.5px] bg-[#A1A1AA]" />
              <div
                className="w-full h-[161.2px] flex justify-center items-center"
                style={{ borderRadius: "0 0 0.75rem 0.75rem" }}
              >
                <p className="text-[#A1A1AA]">No Recent Searches</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
