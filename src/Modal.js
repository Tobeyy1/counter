import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ resetHandler, setShowModal }) => {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').content = "#1b1f24";
  });
  return (
    <div className={classes.container}>
      <div className={classes.backdrop}></div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className={classes.modal}
        >
          <p>Are you sure?</p>
          <div className={classes.cta__container}>
            <button
              className={classes.no}
              onClick={() => {
                setShowModal(false);
                document.querySelector('meta[name="theme-color"]').content =
                  "#2f3439";
              }}
            >
              No
            </button>
            <button
              className={classes.yes}
              onClick={() => {
                resetHandler();
              }}
            >
              Yes
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
