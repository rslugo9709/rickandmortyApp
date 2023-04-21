const http = require("http");
const PORT = 3001;
const { getCharByID } = require("./controllers/getCharById.js")

//const data = require("./utils/data.js")

http.createServer((request, response) =>{
    

    
    try{
        response.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = request;
        //Para administrar la ruta
        if(url.includes("rickandmorty/character")){

            console.log("estas en la ruta adecuada")
            const id = url.split("/").at("-1");
            
            //todo el codigo de abajo se pasó al archivo de controlador
            //Controlador
            getCharByID(response, id)

            //const character = data.find(char => char.id === Number(id));
            /*
            if(character){
                response.writeHead(200, {"Content-type": "application/json"} )
                console.log(character);
                response.end(JSON.stringify(character));
            }else{
                response.writeHead(404, {"Content-type": "application/json"});
                response.end(JSON.stringify({
                    error: "Character not found"
                }))
            }

            //response.json(character);
        }else{
            response.writeHead(404, {"Content-type": "application/json"});
            response.end(JSON.stringify({
                error: "Wrong route"
            }))*/
        } 
    }catch (error){
        response.writeHead(404, {"Content-type": "application/json"})
        console.log(error);
        throw new Error(error);
    }


}).listen(PORT, "localhost");

