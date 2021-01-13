import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './components/CustomLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QuestionList from "./components/QuestionList";
import RegistrationForm from "./components/RegistrationForm";
import NormalLoginForm from "./components/NormalLoginForm";
import CreatePost from "./components/CreatePost";
import Prueba from './components/Prueba';
import Profile from './components/Profile'
import PostDone from './components/PostDone';

const questions = [
  {
    id: '1',
    votes: 30,
    title: 'Cómo calcular el área de un triángulo?',
    comment: 'Para este problema quisiera calcular el área de un triángulo rectángulo',
    tags: ['5to Secundaria', 'Academia', '4to Secundaria', 'Matemáiica'],
    userData: {
      photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
      name: 'Jorge',
      dateCreated: new Date()
    }
  },
  {
    id: '2',
    votes: -5,
    title: 'Como calcular la aceleración de un objeto con fuerzas aplicadas sobre él?',
    comment: 'Tengo las fuerzas aplicas, quisiera explicación de Leyes de Newton',
    tags: ['Física', '5to Secundaria', 'Academia'],
    userData: {
      photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
      name: 'Cesar',
      dateCreated: new Date()
    }
  }
]

const Routes = () => {



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Pregunta/:id">
            <CustomLayout questions={questions} />
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
          <Route path="/VerPerfil">
            <Profile/>
          </Route>
          <Route path="/">
            <Prueba />
          </Route>
          <Route path="/Home">
            <QuestionList questions = {questions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
