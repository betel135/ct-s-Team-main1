import react from 'react'
import Home from '../src/Component/Home/Header/Header'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../src/Component/Home/Header/Header'
import Men from '../src/Component/Home/Header/Men/Men'
import ACCESSORIES from '../src/Component/Home/Header/Accessories/Accessories' 
import Outlet from '../src/Component/Home/Header/Outlets/Outlets'
import Earth from '../src/Component/Home/Header/Earthmovers/Earthmovers'
import Sale from '../src/Component/Home/Header/Sale/Sale'
import Phone from'../src/Component/Home/Header/PhoneNo/PhoneNo'
import Customer from '../src/Component/Home/Header/CustService/CustService'
import FAQS from '../src/Component/Home/Header/Faqs/Faqs'
import FIND from '../src/Component/Home/Header/FindAStor/FindAStor'
import LOGIN from '../src/Component/Home/Header/LogIn/LogIn'
import Cart from '../src/Component/Home/Header/Cart/Cart'

class App extends react.Component{
    render(){
        return(
        
      <Header/>
      
        /*<BrowserRouter>
       <Route exact path="/"component={Home}/>
       <Route path="Header"component={Header}/>
       <Route path="Men"component={Men}/>
       <Route path="Accessories" component={ACCESSORIES}/>
       <Route path="outlet"component={Outlet}/>
        <Route path="Earth" component={Earth}/>
       <Route path="Sale"component={Sale}/>
        <Route path="Phone"component={Phone}/>
        <Route path="Customer"component={Customer}/>
        <Route path="Faqs"component={FAQS}/>
        <Route path="FIND"Component={FIND}/>
        <Route PATH="LOGIN"Component={LOGIN}/> 
        <Route path="Cart"component={Cart}/>
        </BrowserRouter>*/
     

 
        )
    }
}
export default App