import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [ingrediant, setIngrediant] = useState('');
  const [array, setArray] = useState([]);

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...array, { title: '', ingrediant: '' }]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleEditNote = (index, updatedArraye) => {
    const newArray = [...array];
    newArray[index] = updatedArraye;
    setArray(newArray);
  };

  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='header'>My Recipe</h1>
        <input
          className='inputField'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          className='inputField'
          type="text"
          value={ingrediant}
          onChange={(e) => setIngrediant(e.target.value)}
          placeholder="Enter title"
        />
        <button className='add' onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
}

export default App;
