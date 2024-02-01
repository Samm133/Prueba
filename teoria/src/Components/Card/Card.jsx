import "../Card/css/card.css";

const pokemon = [
  {
    id: 1,
    nombre: "bulbasaur",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    nombre: "charmander",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
];

export default function Card() {
  return pokemon.map((item,index) => {
    return <div className="card" key={index}>
			<h1>{item.nombre}</h1>
			<img src={item.imagen} alt="" />
		</div>;
  });
}
