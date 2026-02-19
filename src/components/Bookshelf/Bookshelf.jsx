import { useState } from 'react';


function Bookshelf(){
const [books,setBook] = useState([]);  
const [newBook, setNewBook] = useState(
  {title:'', author:'',}
);

function handleInputChange(event){
  setNewBook({...newBook,[event.target.name]: event.target.value});
  
}

function handleSubmit(event){
  event.preventDefault();
  setBook([...books,newBook]);
  setNewBook({title:'', author:''});
}

return(

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
     <label htmlFor='title'>Title:</label>
     <input name="title" value={newBook.title} onChange={handleInputChange} id ='title' type ="text"/>
     <label htmlFor='author'>Author:</label> 
     <input name="author" value={newBook.author} onChange={handleInputChange} id = 'author' type="text" />
   
    </form>
      
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