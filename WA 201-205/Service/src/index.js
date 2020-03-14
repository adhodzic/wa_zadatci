import express from 'express'
import e from 'express';

const app = express();
const port = 3000;

let studenti = [  
    {oib: "12312349172", ime: "Hrvoje", prezime: "Horvat"},  
    {oib: "82723412342", ime: "Ivana", prezime: "Ivić"},  
    {oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović"} 
]

let a1 = ["aa", "b1", "b1", "ce", "aa", "ce", "b1", "z"]

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
//WA-201 Kalkulator ###################################################
app.get('/calc', (req, res) => {
    let query = req.query;
    if(query){
        let data = []
        data.push( parseInt(query.a) + parseInt(query.b));
        data.push(query.a - query.b);
        data.push(query.a * query.b);
        data.push( query.a / query.b);
        res.json(data);
    }
});
//WA-202 Fibonacci ####################################################

app.get('/fibonacci', (req, res) => {
    let data = req.query
    let fib = fibonacci(parseInt(data.k));
    console.log(fib);
    res.json(fib);
})
//WA-203 Map ##########################################################
app.get('/map', (req, res) => {
    let ms = studenti.map( x =>{
        let st = "";
        st += (x.ime + " " + x.prezime + " (" + x.oib + ")");
        return st;
    });
    res.send(ms);
})
//WA-204 Reduce #######################################################
app.get('/reduce', (req, res) => {
    let suma = studenti.reduce((d,e)=> d + e.ime.length, 0)
    res.json(suma);
})
//WA-205 Reduce to object #############################################
app.get('/object', (req, res) => {
    let a = a1.reduce((obj,item)=>{
        obj[item]?obj[item] += 1:obj[item] = 1
        return obj
    },{})
    res.json(a);
})

app.listen(port, () => console.log(`Slušam na portu ${port}`))