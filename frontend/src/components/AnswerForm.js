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

  /*
  const updatePublicacion = (id) => {
    fetch(`http://localhost:4000/api/publicacion/${id}`, {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: props.publicacion,
    });
  }
*/

/*
editContact(id, name, phone, email, address) {
				fetch(url + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "downtown_xii"
					})
				}).then(() => {
					fetch(url + "agenda/downtown_xii")
						.then(response => response.json())
						.then(result => {
							console.log("update", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			}


import { Input } from 'antd';
import { Button } from 'antd';
import * as React from "react";

const { TextArea } = Input;

function AnswerForm(props) {
  const [answer, setAnswer] = React.useState('');

  // Se ejecuta cuando enter o cuando le doy al boton
  const onSubmit = (e) => {
    e.preventDefault();
    props.saveResponse(answer)
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


*/