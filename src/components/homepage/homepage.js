import {Routes,Route, Link } from"react-router-dom"
import { Reg } from "../reg/reg"
import { Login } from "../login/login"
const Homepage =()=> {
return (
    <div>
 <Routes >
  <Route path="/" element={ <Login />} />
  <Route path="/registration" element={ <Reg />} />
</Routes>
    </div>
)
}
export {Homepage}