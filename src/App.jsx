import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoutes from './pages/PrivateRoutes';
import Signup from './pages/Signup';
import { Toaster } from "react-hot-toast";
// import Contact from './pages/Contact';
import AboutUs from './pages/Aboutus';
import MessageFromPresident from './pages/Message';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

function Main({ children }) {
  return (
    <div>
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main><Home /></Main>} />
          <Route path="/Gallery" element={<Main><Gallery /></Main>} />
          <Route path="/message" element={<Main><MessageFromPresident /></Main>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/about-us" element={<Main><AboutUs /></Main>} />
          <Route path="/events" element={<Main><Events /></Main>} />
          <Route element={<PrivateRoutes />}>
          </Route>
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App;