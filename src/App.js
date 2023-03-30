import './App.css';
import Form from './components/Form';
import {useEffect} from 'react';



// Info 
function App() {  
  
  return (
    <div className="wrapper">
      <div className="App">
        <h1>The Hotdog Hootenanny: A Sizzling Dress-up Spectacle</h1>
        <Form />
      </div>
      <footer><p>&copy; Tyler Wyles 2023</p></footer>
    </div>
  );
}

export default App;

