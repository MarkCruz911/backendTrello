import { Routes, Route } from "react-router-dom";
import FormItem from "./componentes/formItem";
import Register from "./componentes/register";
import Login from "./componentes/login";
function App(){
  return(
    <div className="App ">
      <Routes>
        <Route>
          <Route path="/" element={<FormItem/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route> 
      </Routes>
    </div>
  )
}

export default App;

