import { useState, useEffect } from "react";



const InputField = () => {
  const [inputValue, setInputValue] = useState("");

//   console.log(timesRendered)
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value)
    // console.log('hi from handle change')
  }

  const handleSubmit = () => {
    // save more finally
    setComment(inputValue)
    setInputValue('')
  }

  useEffect(() => {
    console.log('comment that was sent to the BE:',comment)
  }, [comment])

console.log('is re-rendering?')

  
  return (
    <>
      <label htmlFor="name">Leave a comment:</label>
      <br></br>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        maxLength="800"
        size="10"
        onChange={handleChange}
        // value={inputValue}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default InputField;
