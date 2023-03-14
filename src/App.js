import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const addHandler = () => {
    const value = count;

    setCount(value + 1);
    localStorage.setItem("count", JSON.stringify(count));
  };

  const subtractHandler = () => {
    if (count > 0) {
      const value = count;

      setCount(value - 1);
      localStorage.setItem("count", JSON.stringify(count));
    }
  };

  // const reduceCountToZero = () => {
  //   setCount((prev) => {
  //     if (prev <= 0) {
  //       setCount(0);
  //       return;
  //     }
  //     console.log(prev);
  //     if (prev > 0) {
  //       setTimeout(() => {
  //         reduceCountToZero();
  //       }, 1000);
  //       return prev - 1;
  //     }
  //   });
  // };

  const resetHandler = () => {
    setShowModal(false);
    document.querySelector('meta[name="theme-color"]').content = "#2f3439";
    // reduceCountToZero();
    setCount(0);
    localStorage.clear("count");
  };

  useEffect(() => {
    const currentCount = JSON.parse(localStorage.getItem("count"));
    if (currentCount) setCount(currentCount);
    if (!currentCount) setCount(0);
  }, []);

  return (
    <div className="App">
      {showModal && (
        <Modal setShowModal={setShowModal} resetHandler={resetHandler} />
      )}
      <div className="top__bar">
        <span>COUNTER </span>
      </div>
      <div className="display__container">
        <div className="display">
          <span>{count}</span>
        </div>
      </div>
      <div className="cta__container">
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="subtract"
            onClick={subtractHandler}
          >
            -
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
            }}
            className="add"
            onClick={addHandler}
          >
            +
          </motion.button>
        </div>
        <motion.button className="reset" onClick={() => setShowModal(true)}>
          RESET
        </motion.button>
      </div>
    </div>
  );
}

export default App;
