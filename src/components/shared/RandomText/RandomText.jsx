/* eslint-disable react/prop-types */

import LoremText from "../LoremText/LoremText";


const RandomText = ({ textContent, buttonText }) => {


    return (
        <>
            <button>{buttonText}</button>
            <LoremText textContent={textContent} />
        </>
    )
}

export default RandomText;
