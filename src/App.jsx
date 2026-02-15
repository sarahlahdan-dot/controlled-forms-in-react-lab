

// src/App.jsx
import './App.css';
import Bookshelf from './Bookshelf.jsx';

const App = () => {
  const [books, setBooks] = useState('')
  const [newBook,setnewBook] = useState({
    title:"",
    author:""
    
  })

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
