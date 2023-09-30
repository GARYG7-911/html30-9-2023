// const url = "https://hp-api.onrender.com/api/characters"
const url2 ="https://hp-api.onremder.com/api/characters?house=Gryffindor?name=Harry Potette?limit=10"

const resp = fetch(url2)
    .then(resp => resp.json())
    .then(data=>{ return data})
    .catch(error => console.log(error))
    .finally(() =>console.log("finalizo"));

const getPersonajes = async () =>{

    const resultadoPersonajes = await resp;
    const Personajes = await resultadoPersonajes.map(
        (personajes) =>{
            return{
                id: personajes.id,
                nombre: personajes.neme,
                casa: personajes.house,
                Image: personajes.image,
                especie: personajes.species
            }
        }
    )

    const personajesFotos = personajes.filte(personajes => personajes.image !=="");
    return personajesFotos;
}    

console.log(getPersonajes())