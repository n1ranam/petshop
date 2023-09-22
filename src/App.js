import logo from './logo.svg';
import './App.css';
import {lazy,Suspense} from 'react';
import {Routes,Route,Link}from 'react-router-dom';
import Altuser from './component/altuser';
import AltUser from './component/altuser';
function App() {
  const Userregister=lazy(()=>import('./component/userregister'));
  const Login=lazy(()=>import('./component/login'));
  const Navbr=lazy(()=>import('./component/navbr'));
  const Main=lazy(()=>import('./component/main'));
  const Altuser=lazy(()=>import('./component/altuser'));
  const Basicexample=lazy(()=>import('./component/basicexample'));
  const Containerex=lazy(()=>import('./component/containerex'));
  const Defaultpage=lazy(()=>import('./component/defaultpage'));
  const Gallery=lazy(()=>import('./component/gallery'));
  const Slide=lazy(()=>import('./component/slide'));
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path='/reg' element={<Userregister/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/nv' element={<Navbr/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/alt' element={<Altuser/>}/>
        <Route path='/bas' element={<Basicexample/>}/>
        <Route path='/con' element={<Containerex/>}/>
        <Route path='/def' element={<Defaultpage/>}/>
        <Route path='/gall' element={<Gallery/>}/>
        <Route path='/slide' element={<Slide/>}/>
      </Routes>
    </Suspense>
  );
}
export default App;
