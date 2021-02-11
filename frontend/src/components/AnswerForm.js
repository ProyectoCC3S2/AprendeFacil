import { Input } from 'antd';
import { Button } from 'antd';
import * as React from "react";
import {
  useParams
} from "react-router-dom";

const { TextArea } = Input;

function AnswerForm() {

  const { id } = useParams();
  const [answer, setAnswer] = React.useState('');
  let usuariobj = localStorage.getItem("usuario");
  let usuario = JSON.parse(usuariobj);

  const saveSolution = (answer) => {
    return fetch(      
      `http://localhost:4000/api/solucion/createsolucion`,
      {
          crossDomain:true,
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify({
            solution: answer,
            votes: 0,
            idpost: id, 
            user: usuario.nickname,
            userPhoto: usuario.photo
          }) ,
      })
    .then(response => {
      console.log(response)
      window.location.href=window.location.href;
      return response.json()
  })
  .catch(err => console.log(err));
  };

  // Se ejecuta cuando enter o cuando le doy al boton
  const onSubmit = (e) => {
    e.preventDefault();
    //props.saveResponse(answer);
    saveSolution(answer);
    //updatePublicacion(id);
    setAnswer('')
  }

  // Cada vez que tipee eso se ejecuta
  const onTextChange = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <form onSubmit={onSubmit} className="answer-box">
      <h3 className="aswer-title">Tu respuesta</h3>
      <TextArea value={answer} onChange={onTextChange} rows={4} />
      <Button htmlType="submit" type="primary">Enviar</Button>
    </form>
  )
}

export default AnswerForm;
