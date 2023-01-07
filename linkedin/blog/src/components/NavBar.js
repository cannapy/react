import {Link} from 'react-router-dom';

const NavBar=({onChange, onClick, filter})=>{
    return(
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://cannapy.github.io/terminal/">About</a>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>
                    <Link to="/Articles">Articles</Link>
                </li>
                <li>
                    <form type="submit">
                        <input text="Search" onChange={onChange} placeholder="Filter blogs..." value={filter}/>
                        <Link to ="/ArticleSearch"><button type="submit" onClick={onClick}>Search</button></Link>
                    </form>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default NavBar;