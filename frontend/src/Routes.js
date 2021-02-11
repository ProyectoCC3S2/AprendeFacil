import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './components/CustomLayout'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import QuestionList from "./components/QuestionList";
import RegistrationForm from "./components/RegistrationForm";
import NormalLoginForm from "./components/NormalLoginForm";
import CreatePost from "./components/CreatePost";
import Prueba from './components/Prueba';
import Profile from './components/Profile'
import PostDone from './components/PostDone';
import RecargarMonedas from './components/RecargarMonedas'
import ConvertirMonedas from './components/ConvertirMonedas';
import Home2 from './components/Home2';
import NoIngreso from './components/Prohibido';
import PostbyUser from './components/PostbyUser';


export  const ProtectedComponent = () => {
    return <Redirect to='http://localhost:3000/'/>
}

const Routes = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Pregunta/:id" component={CustomLayout}>
            <CustomLayout />
          </Route>
          <Route path="/PostbyUser">
            <PostbyUser />
          </Route>
          <Route path="/IniciarSesion">
            <NormalLoginForm />
          </Route>
          <Route path="/Registrarse">
            <RegistrationForm />
          </Route>
          <Route path="/CrearPublicacion">
            <CreatePost />
          </Route>
          <Route path="/PublicacionRealizada">
            <PostDone/>
          </Route>
          <Route path="/RecargarMonedas">
            <RecargarMonedas />
          </Route>
          <Route path="/ConvertirMonedas">
            <ConvertirMonedas />
          </Route>
          <Route path="/VerPerfil">
            <Profile/>
          </Route>
          <Route path="/Inicio2">
            <Prueba />
          </Route>
          <Route path="/Prohibido">
            <NoIngreso />
          </Route>
          <Route path="/">
            <Home2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
