
//imagen principal
const fotoPrincipal = document.querySelector(".foto-princi");
fotoPrincipal.innerHTML = "<img src='./assets/5.jpg' alt='foto amanecer'>";

//imagenes-card
const seccionFotos = document.querySelector(".fotos1");
const data = [
  {
    img: "./assets/viajes-1.jpg",
    titulo: "viaje 1",
    descripcion:
    "Lorem ipsum dolor sit amet,consectetur adipincing elit.Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies.Sed lobortis dignissim lorem,pharetra",
  },
  {
    img: "./assets/viajes-2.jpg",
    titulo: "viaje 2",
    descripcion:
    "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, utricies nec sem id, efficitur convalis arcu.Praesent suscipit augue necvelit egestas",
  },
  {
    img: "./assets/viajes-3.jpg",
    titulo: "viaje 3",
    descripcion:
    "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac, laoreet in metus. Sed dui odio",
  },
  ];

  for (let i = 0; i < data.length; i++) {
  seccionFotos.innerHTML += `<article class = 'contenido'>
  <img src = '${data[i].img}' alt='imagen prueba'/>
  <h3> ${data[i].titulo}</h3>
  <p>${data[i].descripcion}</p>
  </article>`;
  }
//input ciudades:
const ciudades = document.getElementById("opcion");

const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza",
];

for (let i = 0; i < cities.length; i++) {
  ciudades.innerHTML += `
    <option value="${cities[i]}">${cities[i]}</option>
  `;
}

//Ejer: Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML
//Primer Li
const lista = document.getElementById("lista-ul");
const li1 = document.createElement("li");
const texto1 = document.createTextNode("Texto creado por create en Js");
li1.appendChild(texto1);

const atributo = document.createAttribute("class");
atributo.value = "lista1";
li1.setAttributeNode(atributo);
lista.appendChild(li1);

//Segundo Li
lista.innerHTML += "<li class='lista2'>Elemento 2 creado con innerHTML</li>"

//Ejer 1 bis:
const tareas = ["comprar","barrer","alimentar gato","colada"] //Array
const listado = document.getElementById("lista-ul");
for (let i = 0; i < tareas.length; i++) {
  const li2 = document.createElement("li");
  const texto2 = document.createTextNode(tareas[i]);
  li2.appendChild(texto2);
  listado.appendChild(li2);
}

  



