import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { MainHeader } from './MyComponents/MainHeader';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { Product_Details } from './Pages/Product_Details';


function App() {

  return (

    <div className="container">

        <MainHeader />
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/product">
            <Product />
        </Route>
        <Route path="/product_details/:productId/:productName">
            <Product_Details />
        </Route>

    </div>

);
  /*const name= "Shreya Acharya"
  const users = [
    { name:"Shreya",age:20},
    { name:"Riya",age:20},
    { name:"Priya",age:20}
  ]
  return (
    <div>
    <h1>Hello world</h1>
    <h2>ABC</h2>
    <h2>Name: {name}</h2>
    <h2>Age: {users.age}</h2>
    <h2>User2: {users[1].name}</h2>
    <h3>
    {
      users.map(function (user){
          return <p>{user.name}</p>
        })
        
      }
    </h3>
    </div>
  );*/


}

export default App;
