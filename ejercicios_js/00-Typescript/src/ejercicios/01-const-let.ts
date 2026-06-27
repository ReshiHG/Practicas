// ************************************************************************
// La interfaz sirve para darle una estructura obligatoria a un objeto
// ************************************************************************


interface Person {
  name: string;
  lastName: string;
  address: Address;
}

interface Address {
  postCode: number;
  city: string;
}

const ironman:Person = {
  name: "Tony",
  lastName: "Stark",
  address: {
    postCode: 2334,
    city: "New York"
  }
};

const spiderman = structuredClone(ironman);

spiderman.name = "Peter";
spiderman.lastName = "Parker";
spiderman.address.postCode = 2011;
spiderman.address.city = "California"


console.log(ironman, spiderman);



// ************************************************************************
// Funciones
// ************************************************************************

function greet(name:string):string{
 return `Hola ${name}`
}

const geet2 = (name:string):string => {
  return `Hola ${name}`
}

console.log(greet("Ricardo"), geet2("Jorge"));



const nombres = ['Whinds', 'Freeway', 'Test', 'Maria'];
for(let i = 0; i < nombres.length; i = i + 1 ) {  
	console.log('[for]', nombres[i]);
}
const nombres2 = ['Whinds', 'Freeway', 'Test', 'Maria'];
nombres2.forEach(function(nombre, i) {  
	console.log('[forEach]', nombre, i);
})
const nombres3 = ['Whinds', 'Freeway', 'Test', 'Maria'];
nombres3.map(function(nombre, i) {  
	console.log('[forEach]', nombre, i);
})


// ************************************************************************
// Desestructuración aplicada a una función
// ************************************************************************

const useState = (initialState:string) => {
  return [initialState, (newState:string) => console.log(newState)] as const
}

const [name, setName] = useState("Dalinar");
console.log(name);
setName("Kholin")
console.log(name);



// ************************************************************************
// Tipos de datos personalizados
// ************************************************************************

interface DuneCharacters {
  id: number;
  name: string;
  house: House;
}

// El type permite generar un tipo de dato que tiene valores específicos
// esto ayuda a que otros programadores no metan datos inválidos

type House = "Atreides" | "Harkonnen" | "Corrino";

const characters: DuneCharacters[] = [
  {
    id: 1,
    name: "Paul Atreides",
    house: "Atreides"
  },
  {
    id: 2,
    name: "Barón Vladimir Harkonnen",
    house: "Harkonnen"
  },
  {
    id: 3,
    name: "Princesa Irulan",
    house: "Corrino"
  }
];

console.log(characters);










