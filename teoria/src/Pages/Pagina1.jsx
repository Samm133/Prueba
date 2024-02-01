import {Link} from "react-router-dom";

function Pagina1(){
	return(
		<div>
			<h1>Pagina1</h1>
			<Link to="/pagina2">Ir a pagina 2</Link>
		</div>
	)
}

export default Pagina1