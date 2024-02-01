import { useState } from "react";

const Teoria = () => {
  let [number, setNumber] = useState(0);

  const sumar = () => {
    setNumber(number + 1);
  };

	const restar = () => {
    setNumber(number - 1);
  };

	const reset = ()=>{
	setNumber(0)
	}

  return (
    <div>
      
      <h2>Hola, Mundo!</h2>
			<button onClick={sumar}> Sumar</button>
			<button onClick={restar}> Restar</button>
      <p>{number}</p>
			<button onClick={reset} >Reset</button>
    </div>
  );
};

export default Teoria;
