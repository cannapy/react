import ArticleList from '../components/ArticleList'

const Blog =({handleSaveClick, handleSubmitClick, name, title, content, onName, onTitle, onContent, drafts})=>{
    return(
        <div className="container">
            <div className="grid one">
                <h1>Write a blog</h1>
                <form>
                    <p><b>Name: </b><input onChange={onName} value={name} placeholder="Name" /></p>
                    <p><b>Title: </b><input onChange={onTitle} value={title} placeholder="Title"/></p>
                    <p><b>Content: </b><textarea onChange={onContent} value={content}placeholder="Write your blog: "/></p>
                    <div>
                        <button onClick={handleSaveClick} className="saveBtn">Save</button>
                        <button onClick={handleSubmitClick} className="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
            <div className="grid two">
                <h1>Saved blogs</h1>
                <ArticleList articles={drafts} draft={true}/>
            </div>
        </div>
    )
}


export default Blog