import React, { useEffect, useState } from 'react'
import './services.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Books = () => {

  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = () => {
    axios.get('http://localhost:3000/getbooks').then((result) => {
      if (result) {
        setData(result.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const Handledelete = (index)=>{
    axios.delete(`http://localhost:3000/deletebooks/${index}`).then(result => console.log(result)).catch(err => console.log(err))
  }

  return (
    <div>
      <div className="container">
        <h1 className='book'>BOOKS SECTION</h1>
        {data.length === 0 ? <h1>No Data Exist</h1> :  data.map((item) => {
            return (
              <div className="card" key={item._id}>
                <div className="card_icon">
                  <img src={`http://localhost:3000/${item.file}`} />
                </div>
                <h6>{item.title}</h6>
                <ul>
                  <li>{item.price}$</li>
                  <li><button className='delete' onClick={()=> Handledelete(item._id)}>Delete</button></li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Books