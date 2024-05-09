import React,{useState, useEffect} from 'react'
import './update.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const Update = () => {

  const [image, setImage] = useState()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const params = useParams();

  useEffect(()=>{
    getUpdatedDetails();
  },[])

    const getUpdatedDetails = () => {
      axios.get(`http://localhost:3000/LEE/${params.id}`).then((result) => {
        if (result) {
          setImage(result.data.file)
          setTitle(result.data.title)
          setPrice(result.data.price)
        }
      }).catch((err) => {
        console.log(err)
      });
    }

  // const HandleUpdate = async ()=>{
  //   let result = await fetch(`http://localhost:3000/LEE/${params.id}`,{
  //    method : "put",
  //    body : JSON.stringify({image, title, price}),
  //    headers:{
  //      'Content-Type' : 'application/json'
  //    }
  //   })
  //    result = await result.json();
  //    console.log(result)
  //  }

  return (
    <>
    <input type="file" name='image' id="pa" onChange={(e)=> setImage(e.target.files[0])}/>
    <img src={`http://localhost:3000/${image}`}/>
    <div>
      <input type="hidden" name='old_image' value={image}/>
    </div>
    <input type="text" name='title' placeholder='Enter Title' id="roi" value={title} onChange={(e)=> setTitle(e.target.value)}/>
          
    <input type="text" name='price' placeholder='Enter Price' id="time" value={price} onChange={(e)=> setPrice(e.target.value)}/>
  
    <button id="cal" >Update Books</button>
    </>
  )
}

export default Update