import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import AddService from './Components/Home/AddService/AddService';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/Home/NotFound/NotFound';
import TourServices from './Components/Home/TourServices/TourServices';
import LogIn from './Components/LogIn/LogIn/LogIn';
import Register from './Components/LogIn/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageServices from './Components/Manageservices/ManageServices';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
    
   <AuthProvider>
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
  <Home></Home>
     </Route>
     <Route path ="/register">
       <Register></Register>
       </Route>
     <Route path="/login">
       <LogIn></LogIn>
       </Route>
       <Route path="/tourServices">
       <TourServices></TourServices>
       </Route>
       <Route path="/addService">
         <AddService></AddService>
         </Route>
         <Route path="/manageService">
         <ManageServices></ManageServices>
         </Route>
         <PrivateRoute path="/details/:serviceId">
         <Details></Details>
       </PrivateRoute>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
  </div>
    
  );
}

export default App;
