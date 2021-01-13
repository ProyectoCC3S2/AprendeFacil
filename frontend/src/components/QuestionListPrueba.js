import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function QuestionListPrueba() {
  
    return(
    <div>
        <div className = "container">
            <div className = "row">
            {publicaciones.map((publicacion) => (
              <Link to={`/pregunta/${publicacion._id}`}>
                <div className="question">
                  <div className="question__vote">
                    {publicacion.votes}
                  </div>
                  <div className="question__info">
                    <div className="question__info--comment">
                      {publicacion.comment}
                    </div>
                    <div className="question__info--data">
                    <div className="question__info--tag">
                        {
                          console.log(publicacion.tags),
                          publicacion.tags.map(tag => (
                            <span>{tag}</span>
                          ))
                        }
                      </div>
                      <div className="question__info--user">
                        {publicacion.userData.name}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                ))}
            </div>
        </div>
      </div>
    );
}

export default QuestionListPrueba