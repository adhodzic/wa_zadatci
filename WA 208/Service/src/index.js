import express from 'express';

const app = express();
const port = 3000;

let lista = [  
    {    
        id: 10001,    
        createdBy: "nikola@tankovic.me"
    },  
    {    
        id: 10002,    
        createdBy: "marko@markovic.me"  
    },  
    {    
        id: 10003,    
        createdBy: "iva@ivkovic.me"  
    } 
]

let maxId = () =>{
    return lista.reduce(function(p, t) {
        return (p.y > t.y) ? p : t
    })
}

app.get('/maxid', (req, res) => res.send(maxId()))

app.listen(port, () => console.log(`Slušam na portu: ${port}`))