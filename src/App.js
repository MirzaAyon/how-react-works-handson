
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  // props.price = 15000; 
  ///eta dile r ui te show hbe na karon props er value read only ja amra porte parbo but write korte parbo na
  // update korte chaile jekhane pathaisi shekhan theke change korte  hbe
  return (
    <div className="App">
      <Device name="uphone" price="13000"></Device>
      {/* evabe device call na korle ui te dekhabe na */}

      <Watch></Watch>


    </div>
  );
}

export default App;
//khatae pura kaj tar pic ache
