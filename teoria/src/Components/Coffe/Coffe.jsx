function Coffe() {
  const caliente = false;
  // if(caliente){
  // 	return(
  // 		<h1>Cafe Caliente</h1>
  // 		)
  // 	}else{
  // 		return(
  // 			<h1>Cafe Frio</h1>
  // 		)
  // 	}

  return (
  <h1>{caliente ? "Cafe caliente" : "Cafe frio"}</h1>
  );
}

export default Coffe;

