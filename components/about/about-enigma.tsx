export default function AboutEnigma() {
    return (
        <div className='grid grid-rows-4 h-screen'>
        <div className='text-center flex flex-wrap h-auto pt-3'>
        The enigma machine was a cipher device developed and used in the early- to mid-20th century to protect commercial, diplomatic, and military communication.
        It was employed extensively by Nazi Germany during World War II in all branches of the German military, and was considered so secure that it was used to encipher the most top-secret messages.
        </div>

        <div className='h-auto'>
        The Enigma had an electromechanical rotor system that scrambled the letters of the alphabet. Typically, one person entered each letter of the intended message
        while another wrote down which letter was illuminated on the lampboard. The security of the system depended on machine settings that were generally changed daily, based on secret key lists 
        distributed in advance, and on other settings that were changed for each message. 
        The receiving station would have to know and use the exact settings employed by the transmitting station to successfully decrypt a message.
        </div>

        <div className='h-auto row-span-2'>
        The heart of the machine consisted of 3 rotors that scrambled the input. Each key-press also caused the rotors to step by one twenty-sixth of a full rotation 
        before the electrical connections were made. This changed the substitution alphabet used for encryption, ensuring that the substitution differed at each new rotor position and 
        producing a more formidable cipher. Additionally, a reflector was placed next to the last rotor. This connected outputs of the last rotor in pairs, ensuring that the Enigma would be self-reciprocal, i.e., with two identically configured machines, a message could be encrypted on one and decrypted on the other.
        The Enigma also boasted a plugboard that allowed the user to swap connected letters in pairs (e.g., if A and Q were selected, A would be read as Q by the machine and vice versa.)
        All in all, these components enabled users to select a total of around 159 quintillion different settings, making the cipher nearly impossible to crack.
        </div>

    </div>
    )
}