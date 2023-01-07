import {Link} from 'react-router-dom';

const ArticleList = ({articles, draft}) =>{
    console.log("articlesList",articles)
    console.log(draft)
    if(draft){
        console.log()
        return(
            <>
                {articles.map(article=>(
                    <Link key={article.name} className="article-list-item" to={`/Draft/${article.name}`} draft={article}>
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0,150)} ...</p>
                    </Link>
                ))}
            </>   
        )
    }
    return(
        <>
            {articles.map(article=>(
                <Link key={article.name} className="article-list-item" to={`/Articles/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0,150)} ...</p>
                </Link>
            ))}
        </>    
    )
}

export default ArticleList