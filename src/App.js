import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductDetailsContainer from './components/ProductDetailsContainer/ProductDetailsContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetailsContainer></ProductDetailsContainer>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
