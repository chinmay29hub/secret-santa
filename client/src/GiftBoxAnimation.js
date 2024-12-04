import React, { useReducer } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation( {randomName} ) {
  const navigate = useNavigate();
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Simulate a click on the button after 2 seconds
      animate();
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  const handleRepeatParticipant = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_NODE_SERVER}/api/repeat-participant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // Add any necessary request body
        body: JSON.stringify({ name: randomName })
      });
      
      // Handle the response as needed
      if (response.ok) {
        console.log("Participant repeated successfully!");
        window.location.reload();
      } else {
        console.error("Failed to repeat participant:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="App">
      
      <Confetti open={jump === "jump"} />
      {/* <button onClick={handleRepeatParticipant}>
          Repeated?
        </button> */}
        <div className="p-4">
        <button
  onClick={handleRepeatParticipant}
  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Repeated?
</button>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => window.location.reload()}>
          Start Again
        </button>
        </div>

      <div className="img-container">
        {/* <img className={`kuku ${jump}`} src={kuku} alt="kuku" /> */}
        <p className={`kuku ${jump} dark:text-white text-8xl font-extrabold `}>{ randomName }</p>
        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
