import * as React from "react";
import Wrapper from "./Wrapper";
import {Link} from "react-router-dom";

function QuestionList(props) {
  return (
    <Wrapper>
      <h1>Lista de todas las preguntas en el Foro</h1>
      {
        props.questions.map(question => (
          <Link to={`/pregunta/${question.id}`}>
            <div className="question">
              <div className="question__vote">
                {question.votes}
              </div>
              <div className="question__info">
                <div className="question__info--comment">
                  {question.comment}
                </div>
                <div className="question__info--data">
                  <div className="question__info--tag">
                    {
                      question.tags.map(tag => (
                        <span>{tag}</span>
                      ))
                    }
                  </div>
                  <div className="question__info--user">
                    {
                      question.userData.name
                    }
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </Wrapper>
  )
}

export default QuestionList