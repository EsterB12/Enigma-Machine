import Machine from "../images/machine.jpg";
import Link from "next/link";
import Image from "next/image";

export default function EnigmaImage() {
  return (
    <div className="pt-9 pl-9 h-screen">
      <Image src={Machine} alt="enigma-machine" className="rounded-xl"></Image>
      <div className="text-xs text-gray-500">
        Image showing the components of the Enigma machine
      </div>
      <div className="pt-3">
        Click{" "}
        <Link
          href={"https://en.wikipedia.org/wiki/Enigma_machine#Design"}
          className="text-gray-700 hover:underline"
        >
          here
        </Link>{" "}
        for more information
      </div>
    </div>
  );
}
