import React from 'react';
import Header from './Components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import './reset.scss';
import './App.scss';
import Home from '../src/Pages/Home';
import Catalog from './Pages/Catalog';
import BlockTrailer from '../src/Components/BlockTrailer';
import Favourites from './Pages/Favourites';
import Login from './Pages/Login';
import Footer from '../src/Components/footer';

interface ContextValue {
  SearchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const SearchContext = React.createContext<ContextValue | any>(null);

function App() {
  const [SearchValue, setSearchValue] = React.useState('');
  const [user, setUser] = React.useState(null);
  return (
    <SearchContext.Provider value={{ SearchValue, setSearchValue, user, setUser }}>
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="MainPart">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Category"
              element={user ? <Catalog /> : <Navigate to="/Login" replace />}
            />
            <Route
              path="/Category/Trailer"
              element={user ? <BlockTrailer /> : <Navigate to="/Login" replace />}
            />
            <Route
              path="/Favourites"
              element={user ? <Favourites /> : <Navigate to="/Login" replace />}
            />
            <Route path="Login" element={<Login />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
