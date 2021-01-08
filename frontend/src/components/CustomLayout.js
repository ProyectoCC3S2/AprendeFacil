import HeaderQuestion from "./HeaderQuestion";
import ResponseList from "./ResponseList";
import AnswerForm from "./AnswerForm";
import * as React from "react";
import Wrapper from "./Wrapper";
import {
  useParams
} from "react-router-dom";
import Question from "./Question";

function CustomLayout(props) {
  const { id } = useParams();
  const question = props.questions.find(question => question.id === id)

  const [responses, setResponse] = React.useState([]);

  const user = {
    name: 'Rosa',
    photo: 'https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png'
  }

  const saveResponse = (text) => {
    const miRespuesta = {
      userData: {
        ...user,
        dateCreated: new Date()
      },
      comment: text,
    };
    const newResponses = [...responses, miRespuesta];
    setResponse(newResponses)
  }

  console.log(responses)

  return (
    <Wrapper>
      <div className="main-question">
        <HeaderQuestion title={question.title} />
        <Question question={question}/>
        <AnswerForm saveResponse={saveResponse} />
        <ResponseList responses={responses} />
      </div>
    </Wrapper>
  )
}

export default CustomLayout