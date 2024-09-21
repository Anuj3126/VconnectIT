import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Hostel_Mess from "./pages/Hostel_Mess";
import LoginSignup from "./pages/LoginSignUp";
import NotFound from "./pages/NotFound";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

function App() {
  // const auth = useAuth();
  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/hostel-mess" element={<Hostel_Mess />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  );
}

export default App
