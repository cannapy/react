//localhost:3000/articles/learn-node
import axios from 'axios';
import {useParams} from 'react-router-dom';
import NotFound from './NotFound'

const Article=({articles})=>{
    const {articleId} = useParams();
    const article=articles.find((article)=>article.name===articleId);

    if (!article){
        return <NotFound/>
    }

    return(
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph,i)=>{
                console.log(paragraph)
                return(
                    <p key={i}>{paragraph}</p>
                )
            })}
        </>
    );
}

export default Article;