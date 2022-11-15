import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Rotor from "./enigma/rotors";
import Plugboard from "./enigma/plugboard";
import Keyboard from "./enigma/keyboard";
import Reflector from "./enigma/reflector";
import EnigmaMachine from "./enigma/enigma";
import InputStartingPositions from "../components/enigma/inputstartingpos";

import { useState } from "react";

const I = new Rotor(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
  "Q"
);
const II = new Rotor(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "AJDKSIRUXBLHWTMCQGZNPYFVOE",
  "E"
);
const III = new Rotor(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "BDFHJLCPRTXVZNYEIWGAKMUSQO",
  "V"
);
const IV = new Rotor(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "ESOVPZJAYQUIRHXLNFTGKDCMWB",
  "J"
);
const V = new Rotor(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "VZBRGITYUPSDNHLXAWMJQOFECK",
  "Z"
);

const A = new Reflector("EJMZALYXVBWFCRQUONTSPIKHGD");
const B = new Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");
const C = new Reflector("FVPJIAOYEDRZXWGCTKUQSBNMHL");
const k = new Keyboard();

export default function Enigma() {
  // const [r1, setR1] = useState("");
  // const [r2, setR2] = useState("");
  // const [r3, setR3] = useState("");
  const [reflectorI, setReflectorI] = useState("");
  const [rotor1I, setRotor1I] = useState("");
  const [rotor2I, setRotor2I] = useState("");
  const [rotor3I, setRotor3I] = useState("");
  const [plugboardI, setPlugboardI] = useState("");
  const [ringSettingsI, setRingSettingsI] = useState("");
  // const [userInput, setUserInput] = useState("");

  const onChangeHandler = (event) => {
    // setR1(event.target.value);
    // setR2(event.target.value);
    // setR3(event.target.value);
    setReflectorI(event.target.value);
    setRotor1I(event.target.value);
    setRotor2I(event.target.value);
    setRotor3I(event.target.value);
    setPlugboardI(event.target.value);
    setRingSettingsI(event.target.value);
    // setUserInput(event.target.value);
  };
  // let startingPos1 = r1.toUpperCase();
  // let startingPos2 = r2.toUpperCase();
  // let startingPos3 = r3.toUpperCase();
  let reflector = reflectorI.toUpperCase();
  let rotor1 = rotor1I.toUpperCase();
  let rotor2 = rotor2I.toUpperCase();
  let rotor3 = rotor3I.toUpperCase();
  let plugboard = plugboardI.toUpperCase();
  let ringSettings = ringSettingsI;
  // let userIn = userInput.toUpperCase();

  function setPlugboard() {
    let pairs = plugboard.split(" ");

    if (pairs.length > 10 || pairs.length < 2) {
      alert(
        "Please provide 1-10 pairs of letters to switch on the plugboard. These letters should be separated by spaces ONLY"
      );
    }
    return pairs;
  }

  function ringSetting() {
    let rings = ringSettings.split(" ");
    let ringsArr = [];

    for (let i = 0; i < rings.length; i++) {
      ringsArr[i] = parseInt(rings[i]);
      if (ringsArr[i] > 26 || ringsArr[i] < 1) {
        alert("Please ensure that you use numbers 1-26");
      }
    }

    if (ringsArr.length !== 3) {
      alert("Please proveide 3 numbers (1-26) for the ring settings");
    }
    return ringsArr;
  }

  function RotorValues(rotor: string) {
    let R: Rotor;
    switch (rotor) {
      case "I":
        R = I;
        break;

      case "II":
        R = II;
        break;

      case "III":
        R = III;
        break;

      case "IV":
        R = IV;
        break;

      case "V":
        R = V;
        break;

      default:
        alert("Please enter a valid value (I-V)");
    }
    return R;
  }

  function ReflectorValue(reflect: string) {
    let Reflect: Reflector;
    switch (reflect) {
      case "A":
        Reflect = A;
        break;

      case "B":
        Reflect = B;
        break;

      case "C":
        Reflect = C;
        break;

      default:
        alert("Please enter a valid reflector value (A-C");
    }
    return Reflect;
  }

  return (
    <div>
      <Head>
        <title>Enigma Machine</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-screen w-screen bg-wood-texture">
        <InputStartingPositions />
        <div className="h-60 mt-5 grid grid-cols-4 justify-items-center">
          <div className="grid grid-cols-1 justify-items-center">
            <label id="reflectorL" className="text-white">
              Reflector
            </label>
            <input
              id="reflectorI"
              type="text"
              onChange={(e) => setReflectorI(e.target.value)}
              value={reflectorI}
              className="h-24 w-8 bg-custom-light text-center"
              placeholder="A"
            ></input>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <label id="rotor1L" className="text-white">
              Rotor 1
            </label>
            <input
              id="rotor1I"
              type="text"
              onChange={(e) => {
                setRotor1I(e.target.value);
              }}
              value={rotor1I}
              className="h-24 w-8 bg-custom-light text-center"
              placeholder="I"
            ></input>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <label id="rotor2L" className="text-white">
              Rotor 2
            </label>
            <input
              id="rotor2I"
              type="text"
              onChange={(e) => {
                setRotor2I(e.target.value);
              }}
              value={rotor2I}
              className="h-24 w-8 bg-custom-light text-center"
              placeholder="II"
            ></input>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <label id="rotorL" className="text-white">
              Rotor 3
            </label>
            <input
              id="rotor3I"
              type="text"
              onChange={(e) => {
                setRotor3I(e.target.value);
              }}
              value={rotor3I}
              className="h-24 w-8 bg-custom-light text-center"
              placeholder="III"
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white py-3 px-3 rounded-lg"
            onClick={() => {
              ReflectorValue(reflector);
              RotorValues(rotor1);
              RotorValues(rotor2);
              RotorValues(rotor3);
              ringSetting();
              this.getStartingPos();
              setPlugboard();
              const p = new Plugboard(setPlugboard());
              const E = new EnigmaMachine(
                ReflectorValue(reflector),
                RotorValues(rotor1),
                RotorValues(rotor2),
                RotorValues(rotor3),
                p,
                k
              );
              E.setKey(this.getStartingPos());
              E.ringSettings(ringSetting());

              let message = this.userIn;
              let cipherText = "";

              for (let i = 0; i < message.length; i++) {
                let char = message[i];
                cipherText += E.encipher(char);
              }

              document.getElementById("userOutput").textContent = cipherText;

              return cipherText;
            }}
          >
            Click to encipher your message
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2 justify-items-center">
            <div className="h-[100px]">
              <label id="plugboardL" className="text-white">
                Plugboard:{" "}
              </label>
              <input
                id="plugboardI"
                type="text"
                onChange={(e) => setPlugboardI(e.target.value)}
                value={plugboardI}
                className="border-black rounded-lg border-2 w-56"
                placeholder="ex. AX GO CY (max 10 pairs)"
              ></input>
            </div>
            <div>
              <label id="RingSettingsL" className="text-white">
                Ring Settings:{" "}
              </label>
              <input
                id="RingSettingsI"
                type="text"
                onChange={(e) => setRingSettingsI(e.target.value)}
                value={ringSettingsI}
                className="border-black rounded-lg border-2"
                placeholder="ex. 1 2 3 (0-26)"
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <label className="h-40 w-80 bg-white flex align-middle overflow-scroll" id="userOutput">
              Output
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
