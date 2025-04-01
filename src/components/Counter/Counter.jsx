/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const Counter = ({number, setNumber}) => {
    const value = useSelector(state => state.counter.value )
    const numberUseState = number;
  return (
    <div style={{ paddingTop: "3rem" }}>
        <p>Number from useState: {numberUseState}</p>
        <button onClick={()=> setNumber(number + 1)}>+1</button>
        <hr></hr>
      <h3>Redux counter</h3>
      <span>Number from Global Store: {value}</span>
      <div>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
      </div>

      <div>
        <input type="text"></input>
        <button>Add custom amount</button>
      </div>
    </div>
  );
};

export default Counter;
