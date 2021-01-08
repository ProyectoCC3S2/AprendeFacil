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

export default AnswerForm