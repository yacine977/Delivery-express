
import './App.css';


import Home from './pages/Home';
import CommandeForm from './pages/CommandeForm';
import ListeCommande from './pages/ListeCommande';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  
  
  return (
    <div className="App" >

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mes-commandes" element={<CommandeForm />} ></Route>
        <Route path="/commande-a-faire" element={<ListeCommande />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>   
        

    

    </div>
  );
}

export default App;  
