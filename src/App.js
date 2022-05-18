import Navbar from "./pages/shared/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/home/Home";
import ErrorPage from "./pages/ErrorPage/Errorpage";
import RequireAuth from "./pages/signin/RequireAuth/RequireAuth";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className={'bg-gray-50 px-4 h-full'}>
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/home'} element={<Home/>}></Route>
        <Route path={'/signin'} element={<SignIn/>}></Route>
        <Route path={'/signup'} element={<SignUp/>}></Route>
        <Route path={'/checkout'}
          element={<RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}
        ></Route>
        <Route path={'*'} element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
