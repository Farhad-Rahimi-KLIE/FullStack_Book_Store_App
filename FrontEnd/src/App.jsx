import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main'
import Books from './Components/Books'
import AddBooks from './Components/AddBooks'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/add' element={<AddBooks/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App