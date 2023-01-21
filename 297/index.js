const {response} = require("express");
const express = require("express");

const port = 8080;
const app = express();
//allow JSON body requestes
app.use(express.json());


app.get("/helloworld", (req,res)=>{
    let result = <h1>Hello World</h1>;
    response.send(result);
    return(
        <h1></h1>
    )
})


app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})


function getBooksAsHTMLList(){
    let html = "<ul>";
    for(let id in booklist){
        for (let id in booklist){

        }
    }
}

app.get("/", (req,res)=>{
    let string = getBooksAsHTMLList();
})

app.get("/:num", (req,res)=>{

})


app.get("/:num/:tile",(req,res)=>{
    let title = req.params.tile;

    //get the number of book
    let book =booklist[num];

    //if the book exists, update it
    if(book){
        let num =num;
        book.title = title;
        res.send(`Updated book ${num} title: ${title}`)l
    }
});


app.post("/add", (req, res)=>{
    let body = req.body;
    let title=body.title;
    let author = body.author;

    //Add the book to the list
    let id = Object.keys(booklist).length +1;
    booklist[id] = {
        title:title,
        author:author,
    }
})


