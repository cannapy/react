import ArticleList from '../components/ArticleList';
import articles from './article-content'

const ArticleSearch=({filteredArticles})=>{

    return(
        <>
            <h1>{filteredArticles.length} Articles Found</h1>
            <ArticleList articles={filteredArticles}/>          
        </>
    );
}

export default ArticleSearch;