import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SignInUp from './pages/SignInUp/SignInUp';
import Booking from './pages/Booking/Booking';
import Confirm from './pages/Confirm/Confirm';
import MyBooking from './pages/MyBooking/MyBooking';
import AllBooking from './pages/AllBooking/AllBooking';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign-in-up">
            <SignInUp />
          </Route>
          <Route path="/booking/:raftingId">
            <Booking />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/my-booking/:userEmail">
            <MyBooking />
          </Route>
          <Route path="/manage-all-booking">
            <AllBooking />
          </Route>
          <Route path="/add-new-package">
            <AddNewPackage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
