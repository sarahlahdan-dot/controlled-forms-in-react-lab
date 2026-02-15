import { useState } from 'react';
import App from '../../App'; 

function Bookshelf(){
const [books,setBook] = useState([]);  
const [newBook, setNewBook] = useState(
  {title:'', author:''}
);

function handleInputChange(event){
  setNewBook({...newBook,[event.target.name]: event.target.value});
  
}

function handleSubmit(event){
  event.preventDefault()
  setBook([...books,newBook]);
  setNewBook({title:'', author:''})
}

return(

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}/>
     <input name="title" value={newBook.title} onChange={handleInputChange} type ="text"/>
     <input name="author" value={newBook.author} onChange={handleInputChange} type="text" />
   
  </div>
  {books.map((book)=>
  <div className="bookCardsDiv">

    <h2>{books.title}Title :</h2>
    <h3>{books.author}Author :</h3>

    </div>
  )}
</div>


)}


export default Bookshelf