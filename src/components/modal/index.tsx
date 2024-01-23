import React from "react";
import Card from "../card";
import { LuSearch } from "react-icons/lu";
import "./modal.css";
import KeyBinding from "react-keybinding-component";

interface ModalProps {
  isOpen: boolean;
  isClose: any;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen } = props;
  if (!isOpen) return null;
  if (isOpen) {
    return (
      <div className="h-[100vh] w-full fixed top-0 left-0 z-50 bg-[#000000]/80">
        <Card className="w-[560px] h-[210px] rounded-xl bg-[#d6d6d6] dark:bg-navy-800 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <KeyBinding
            onKey={(e) => {
              e.preventDefault();
              if (e.code === "Escape") {
                props.isClose(false);
              }
            }}
            type="keydown"
            target={window}
          />
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
                type="search"
                className="bg-[transparent] placeholder:text-[#000000]/40 placeholder:font-[500] placeholder:text-lg border-0 focus:outline-0 w-full"
                placeholder="Search Panel"
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
      </div>
    );
  }
};

export default Modal;
