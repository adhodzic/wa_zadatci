import express from 'express'
import storage from './memory_storage'
import cors from 'cors'

const app = express()
const port = 3000;
app.use(cors())

app.get("/posts", (req, res) => {
    let posts = storage.posts
    let query = req.query
    let filterdPosts = posts
    if(query.term){
        let arr = query.term.split(" ");
        filterdPosts = posts.filter(p => {
            let inc = false;
            arr.forEach(a =>{
                p.createdBy.includes(a) || p.title.includes(a)?inc = true:inc = false
            })
            return inc
        });
    }
    res.json(filterdPosts)
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))

