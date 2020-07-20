import React, { useState, createContext,useReducer } from 'react';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HookReducer from './Component/Hooks/Functional/HookReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';

//import DetailComp from './Component/Fungsional/DetailComp';

// import Beranda from './Component/Class/Beranda';
// import './App.css';

export const keranjangContext= createContext()

const initialState = {
  jumlah: 1,
  hargasatuan: 3890000,
  hargatotal: 3890000
}

const reducer = (state, action) => {
  switch (action. type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurang': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan 
      }
      default:
          return state
  }
}



const App = () => {

  const[value, setValue] = useState(0)
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
    <CartContext.Provider value={{value, setValue}}>
      <NavbarComp />
      <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch:dispatch}}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutComp} />
        <Route exact path="/barang" component={ListComp} />
        <Route exact path="/barang/tambah" component={TambahComp} />
        <Route exact path="/barang/edit" component={EditComp} />
        <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/hooks" component={HooksComp} />
        <Route exact path="/useeffects" component={HooksUseEffects} />
        <Route exact path="/produk" component={ProductComp} />
        <Route exact path="/reducer" component={HookReducer}/>
        <Route exact path="/tagihan" component={Tagihan}/>


        {/*<Route exact path="/detail/:id" component={DetailComp} /> */}

      </Switch>
      </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
