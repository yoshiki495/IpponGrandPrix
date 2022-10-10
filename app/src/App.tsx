import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import MyPage from "./Pages/MyPage";
import "./App.css";
import IpponRoom from "./Pages/IpponRoom";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home/>}></Route>
          <Route path={`signup`} element={<SignUp/>}></Route>
          <Route path={`signin`} element={<SignIn/>}></Route>
          <Route path={`/mypage/:content`} element={<MyPage/>}></Route>
          <Route path={`/ippon-room/:roomId`} element={<IpponRoom/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
