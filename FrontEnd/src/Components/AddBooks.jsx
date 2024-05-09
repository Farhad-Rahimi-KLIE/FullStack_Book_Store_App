import React, { useState } from 'react'
import './add.css'
import axios from 'axios'
const AddBooks = () => {
  const [image, setImage] = useState()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const HadleClick = ()=>{
    let data = new FormData();
    data.append('image', image)
    data.append('title', title)
    data.append('price', price)
    axios.post('http://localhost:3000/addbooks', data).then(result => console.log(result)).catch(err => console.log(err))
  }

  return (
    <div>
      <input type="file" name='image' id="pa" onChange={(e)=> setImage(e.target.files[0])}/>
        
      <input type="text" name='title' placeholder='Enter Title' id="roi" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        
      <input type="text" name='price' placeholder='Enter Price' id="time" value={price} onChange={(e)=> setPrice(e.target.value)}/>

      <button id="cal" onClick={HadleClick}>Add Books</button>
    </div>
  )
}

export default AddBooks