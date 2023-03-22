
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AllCharactersPage from "./pages/AllCharactersPage/AllCharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={'/'} element={<MainLayout/>}>
           <Route index element={<Navigate to={'/characters'}/>}/>
           <Route path={'/characters'} element={<AllCharactersPage/>}/>
           <Route path={'/characters/:id'} element={<SingleCharacterPage/>}/>
       </Route>
         <Route path={'*'} element={<NotFoundPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
