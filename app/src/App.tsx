import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import MyPage from "./Pages/MyPage";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home/>}></Route>
          <Route path={`signup`} element={<SignUp/>}></Route>
          <Route path={`signin`} element={<SignIn/>}></Route>
          <Route path={`/mypage/:content`} element={<MyPage/>}></Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
