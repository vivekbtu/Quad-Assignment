
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
     </div>
  );
}

export default App;

