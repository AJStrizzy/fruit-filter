import logo from './logo.svg';
import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'dragonfruit', 'kiwi', 'mango', 'grape', 'starfruit', 'pineapple', 'guava', 'cherry'] 
  return (
    <div className="App">
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
