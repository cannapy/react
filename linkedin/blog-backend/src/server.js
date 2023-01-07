import express from 'express';
let articlesInfo=[{
    name: 'learn-react',
    upvotes:0,
    comments:[],
},{
    name: 'learn-node',
    upvotes:0,
    comments:[],
},{
    name: 'mongodb',
    upvotes: 0,
    comments:[],
},
]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upVote',(req,res)=>{
    const {name}=req.params;
    const article = articlesInfo.find((article)=>article.name===name)
    if(article){
        article.upvotes+=1;
        res.send(`${name} has ${article.upvotes} upvotes`);
        console.log(`${name} has ${article.upvotes} upvotes`);
    }else{
        res.send(`${name} does not exist`);
        console.log(`${name} does not exist}`);
    }
})

app.post('/api/articles/:name/comments', (req,res)=>{
    const {name}=req.params;
    const{postedBy, text}=req.body;

    const article = articlesInfo.find((article)=>article.name ===name);
    if(article){
        article.comments.push({postedBy, text});
        console.log(article.comments)
        res.send(article.comments);
    }else{
        res.send(`${name} does not exist`)
    }
});

app.put('/api/articles/:name/upvote', (req,res)=>{
    const {name} = req.params;
    const article = articlesInfo.find((article)=>article.name===name);
    if (article){
        article.upvotes+=1;
        console.log(`${name} upvoted! \n${article.name}:${article.upvotes} upvotes`)
        res.send(`${article.name} upvoted! \n${article.name}:${article.upvotes}`)
    }
    else{
        res.send(`${name} doesn't exist`)
    }
});


app.listen('8000', ()=>{
    console.log('server is listening on port 8000!');
});