import React, { useState } from 'react'
import axios from 'axios';

function BookForm() {

    const [photo, setPhoto] = useState("");
    const [result,setResult] = useState([]);
    
  
    function handleChange(event){
      setPhoto(event.target.value);
    }
    
    function handleSubmit(event){
      console.log(photo);
  
        
      axios.get("https://se-book-store.herokuapp.com/api/v1/books")
      .then ((response) =>{
        console.log(response);
        setResult(response.data);
      })
    }
  return (
    <div>
        <navbar class="navbar">
            <div class="logo">
                <img 
                  src='https://www.logo.wine/a/logo/Book_Depository/Book_Depository-Logo.wine.svg'>
                </img>
            </div>
            <div class="boxSearch">    
                <input onChange={handleChange}  type="text" name="photo" placeholder="Search" />
                <button onClick={()=>{handleSubmit()}} type="submit">Search</button>
            </div>   
        </navbar>

              {result.map(photo=>{
                  return(
            
      <div class="row">
        <div class="menu-section">            
              <div class="text-accout">
                  
              </div>
              <div class="img-section">
                  <img src={photo.thumbnailUrl} />
                  <p>{photo.title}</p>
              </div>
              <div class="text-section">
                  <p>รหัสหนังสือ: {photo.isbn}</p>
                  <p>เล่มที่: {photo.pageCount}</p>
                  <p>ประวิติย่อ: {photo.shortDescription}</p>
              </div>
        </div>
      </div>
              )})}
    </div>

  )
}

export default BookForm