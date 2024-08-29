import Home from "./pages/Home" ;
import { BrowserRouter as Router, Routes , Route, Navigate  } from "react-router-dom";
import ProfileDashboard from "./pages/ProfileDashboard";
import Signup from "./pages/auth/SignUp"
import Login from "./pages/auth/Login" ;
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Test from "./pages/Test";

function App() {
  const {authUser} = useAuthContext() ;
  return(
    <>
    <Toaster/>
     <Router>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login" /> } />
        <Route path ="/test" element={<Test/>} />
        <Route path="/profile" element={authUser ? <ProfileDashboard/> : <Navigate to="/login" />} />
        <Route path="/signup" element={ authUser ? <Navigate to="/"/> :<Signup/>} />
        <Route path="/login" element={authUser ? <Navigate to="/"/> :<Login/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
