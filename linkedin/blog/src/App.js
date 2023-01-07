import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import ArticleSearch from './pages/ArticleSearch'
import articless from './pages/article-content'
import Blog from './pages/Blog'
import Draft from './pages/Draft'


function App() {
  const [filter,setFilter]=useState('')
  const [articles, setArticles]=useState(articless)
  const [filteredArticles, setFilteredArticles]=useState(articles)
  const [drafts, setDrafts]=useState([])
  const [title, setTitle]=useState('')
  const [name, setName]=useState('')
  const [content,setContent]=useState('')
  const [draft, setDraft] = useState({})

  const handleFilterChange=(event)=>{
    setFilter(event.target.value)
  }

  const onName=(event)=>{
    setName(event.target.value)
  }

  const onTitle=(event)=>{
    setTitle(event.target.value)
  }

  const onContent=(event)=>{
    setContent(event.target.value)
  }

  const handleFilterClick=(event)=>{
    const filteredArticles=articles.filter((article)=>{
        return(article.title.toLowerCase().includes(filter.toLowerCase()))
    })   
    setFilteredArticles(filteredArticles);
    setFilter('')
    console.log("clicked filter", {filteredArticles});
    console.log("click filter", filter)
  }

  const handleSaveClick=(event) =>{
    event.preventDefault()
    if(name.length===0){
      alert("Please fill in name")
    }
    else if(title.length===0){
      alert("Please fill in title")
    }
    else if(content.length===0){
      alert("Please fill in content")
    }
    else{
      const draftObj={
        name:name,
        title:title,
        content:[content],
        key:drafts.length+1
      }
      setDrafts(drafts.concat(draftObj))
      setName('')
      setTitle('')
      setContent([])
      console.log("draft Saved")
    }
  }

  const handleSubmitClick=(event)=>{
    event.preventDefault()
    if(name.length===0){
      alert("Please fill in name")
    }
    else if(title.length===0){
      alert("Please fill in title")
    }
    else if(content.length===0){
      alert("Please fill in content")
    }
    else{
      const articlesObj={
        name:name,
        title:title,
        content:[content],
        key:articles.length+1,
      }
      setArticles(articles.concat(articlesObj));
      
      setName('')
      setTitle('')
      setContent([])
      console.log("article submitted")
    }
  }

  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onChange={handleFilterChange} onClick={handleFilterClick} filter={filter}/>
        
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Articles" element={<ArticleList articles={articles}/>}/>
            <Route path ="/ArticleSearch" element={<ArticleSearch filteredArticles={filteredArticles}/>}/>
            <Route path="/Articles/:articleId" element={<Article articles={articles}/>}/>
            <Route path="/Blog" element={<Blog handleSaveClick={handleSaveClick} handleSubmitClick={handleSubmitClick} name={name} title={title} content={content} onName={onName} onTitle={onTitle} onContent={onContent} drafts={drafts}/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/Draft/:draftId" element={<Draft drafts={drafts} draft={draft} setDraft={setDraft}/>}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
