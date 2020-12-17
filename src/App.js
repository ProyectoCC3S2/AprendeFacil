import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './components/CustomLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QuestionList from "./components/QuestionList";

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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pregunta/:id">
            <CustomLayout questions={questions} />
          </Route>
          <Route path="/">
            <QuestionList questions={questions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
