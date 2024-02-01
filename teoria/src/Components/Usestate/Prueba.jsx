import { useState, useEffect } from "react"



 function Prueba(){
	let [likes, setLikes] = useState(0)


	
	function likeUp(){
		setLikes( likes + 1) 
	}
	useEffect(likeUp,[])/* useeffect ejecuta la funcion automaticamente 1 vez*/
	return(
		<div>
			<h1>Likes {likes}</h1>
			<button onClick={likeUp}>Dar like</button>
		</div>
	)
}

export default Prueba