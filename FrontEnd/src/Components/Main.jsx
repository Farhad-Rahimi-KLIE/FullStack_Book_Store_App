import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const Main = () => {
  return (
    <>
     <header className="site-header">
      <nav>
        <div className="logo">
          <h1>Book<span> Store</span></h1>
        </div>
        <div className="menu">
          <ul className="wwe">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/add">Add Books</Link></li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="leftside">
          <h1>BOOK STORE</h1>
          <br />
          <h1>FOR YOU</h1>
          <br />
          <Link to="/books">view Books</Link>
        </div>
      </section>
    </header>
    </>
  )
}

export default Main