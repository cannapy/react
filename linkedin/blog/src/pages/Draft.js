import {useParams} from 'react-router-dom'

const Draft=({drafts, draft, setDraft})=>{
    const {articleId} = useParams();
    console.log("Draft",drafts[0].title)
    setDraft(drafts[0])
    return(
        <>
            <h1>Edit Blog:</h1>
            <div>
                <p><b>Name: </b></p><input onChange={console.log("Name")} value={drafts[0].name} />
            </div>
            <div>
                <p><b>Title: </b></p><input onChange={console.log("Name")} value={drafts[0].title} />
            </div>
            <div>
                <p><b>Content: </b></p>{drafts[0].content.map((paragraph)=><textarea onChange={console.log("Name")} value={paragraph}></textarea>)}
            </div>
        </>
    );
}

export default Draft