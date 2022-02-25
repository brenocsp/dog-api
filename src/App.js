import axios from 'axios';
import './App.css';
import api from "./services/api";

axios.defaults.baseURL = 'https://api.thedogapi.com/v1/images/search'
axios.defaults.headers.common['x-api-key'] = '4be46b5c-8453-462a-8a28-1f73e711fb62'

function App() {
  return (
    <div className="App">
      <header className="Dog API">
      </header>
    </div>
  );
}

export default App;
