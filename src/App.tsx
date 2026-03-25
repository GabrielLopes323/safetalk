import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Create from "./pages/Create";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}
