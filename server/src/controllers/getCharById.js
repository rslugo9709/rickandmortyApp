const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";





const getCharByID =(res, id) =>{
    console.log(url+id)
    axios.get(url+id).then(
        
        (response) =>{
            //console.log("se simula la respuesta");
            console.log(res.data);
            const {id, name, gender, species, origin, image, status} = response.data;
            console.log(name)

            //mandamos la informacion de la respuesta
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
        }   

    ).catch((err) =>{
        //console.log(err)
        
        res.writeHead(500, { "Content-Type":  "text/plain"} )
        res.end(err.message);
        
    })
}

//getCharByID(null, 1)

module.exports = {
    getCharByID
};


// ./src/controllers/getCharById.js