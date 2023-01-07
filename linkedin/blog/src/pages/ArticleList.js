import ArticleList from '../components/ArticleList';


const ArticlesList=({articles})=>{
    return(
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles}/>          
        </>
    );
}

export default ArticlesList;