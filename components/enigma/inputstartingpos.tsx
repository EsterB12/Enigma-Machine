import { useState } from "react";

export default function InputStartingPositions() {
    const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [userInput, setUserInput] = useState("");

  const onChangeHandler = (event) => {
    setR1(event.target.value);
    setR2(event.target.value);
    setR3(event.target.value);
    setUserInput(event.target.value);
  };
    
  let startingPos1 = r1.toUpperCase();
  console.log(startingPos1);
  let startingPos2 = r2.toUpperCase();
  console.log(startingPos2);
  let startingPos3 = r3.toUpperCase();
  console.log(startingPos3);
  let userIn = userInput.toUpperCase();
  console.log(userIn);

  function getStartingPos() {
    let startingpos = "";

    if (
      typeof startingPos1 !== "string" ||
      typeof startingPos2 !== "string" ||
      typeof startingPos3 !== "string"
    ) {
      alert(
        "The starting positions should consist of letters of the alphabet. (A-Z)"
      );
    }

    startingpos += startingPos1;
    startingpos += startingPos2;
    startingpos += startingPos3;
    return startingpos;
  }


    return (
        <span className="grid grid-cols-2 h-28 pt-4 justify-items-center">
        <div>
        <div className="grid grid-cols-3 justify-items-center">
          <div>
            <input
              id="r1"
              type="text"
              onChange={(e) => setR1(e.target.value)}
              value={r1}
              className="h-8 w-5 mx-3 bg-custom-light mt-5 text-center"
              placeholder="A"
            ></input>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <input
              id="r2"
              type="text"
              onChange={(e) => setR2(e.target.value)}
              value={r2}
              className="h-8 w-5 bg-custom-light mt-5 text-center"
              placeholder="B"
            ></input>
          </div>
          <div>
            <input
              id="r3"
              type="text"
              onChange={(e) => setR3(e.target.value)}
              value={r3}
              className="h-8 w-5 bg-custom-light mt-5 text-center"
              placeholder="C"
            ></input>
          </div>
        </div>
        </div>
        <div className="w-56">
          <label className="text-white">Please enter your message</label>
          <input
          className="mt-3"
          id="userInput"
          type='text'
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          placeholder="Enter message here"
          ></input>
        </div>
      </span>
    )
}