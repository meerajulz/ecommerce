import Home from "./router/home/home.componen";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./router/navigation/navigation.component";
import SignIn from "./router/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Im the shop page</h1>
}

const App = () => {

  return  (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='sign-in' element={<SignIn/>}></Route>
        </Route>
    </Routes>
  )
}

export default App;