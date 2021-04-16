import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import AddService from './Components/Admin/AddService/AddService';
import OrderList from './Components/Admin/OrderList/OrderList';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './Components/Admin/ManageService/ManageService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>{loggedInUser.name}</p>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/orderList">
              <OrderList></OrderList>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/manageService">
              <ManageService></ManageService>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;