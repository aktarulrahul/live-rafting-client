import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import AuthProvider from './contexts/AuthProvider';
import AllRaftingPackages from './pages/AllRaftingPackages/AllRaftingPackages';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-in-up">
            <SignInUp />
          </Route>
          <PrivateRoute path="/booking/:raftingId">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/confirm">
            <Confirm />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/my-booking/:userEmail">
            <MyBooking />
          </PrivateRoute>
          <PrivateRoute path="/manage-all-booking">
            <AllBooking />
          </PrivateRoute>
          <PrivateRoute path="/add-new-package">
            <AddNewPackage />
          </PrivateRoute>
          <Route path="/all-packages">
            <AllRaftingPackages />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
