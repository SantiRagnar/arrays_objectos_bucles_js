"use strict";

const data = [
    {
        id: 1,
        name: "Bulbasaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png",
    }
]

/* Enunciado
1) Utilice el array data para completar la página de pokemones,
como ejemplo se puede guiar por el siguiente "article", deberá
utilizar un bucle para recorrer data y armar el HTML que introducirá
en "section".

      <article>
        <img
          src="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
          class="icon-type"
          alt="icon type"
        />
        <p>
          Pokemon algo1
        </p>
      </article>

2) Luego de que haya podido generar el contenido dinamicamente, agregar
    a todas las tarjetas de pokemons la propiedades "planta"
    al pasar el mouse por encima (mouseover).

*/

/* Comienza a escribir su código aquí */

let section = document.getElementsByTagName("section")[0];
let html = '';
for (const pokemon of data) {
  html += `
  <article>
  <img
    src="${pokemon.thumbnail}"
    class="icon-type"
    alt="icon type"
  />
  <p>
    Pokemon ${pokemon.name}
  </p>
  </article>
`
}
section.innerHTML = html;

for (let i = 0; i < section.children.length; i++) {
  section.children[i].addEventListener("mouseover",()=>{
    section.children[i].classList.add("planta");
  });
  section.children[i].addEventListener("mouseout",()=>{
    section.children[i].classList.remove("planta");
  })
}
console.log(section.children)