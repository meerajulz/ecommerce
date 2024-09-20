import Home from "./router/home/home.componen";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./router/navigation/navigation.component";
import Authentication from "./router/authentication/authentication.component";

const Shop = () => {
  return <h1>Im the shop page</h1>
}

const App = () => {

  return  (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='auth' element={<Authentication/>}></Route>
        </Route>
    </Routes>
  )
}

export default App;