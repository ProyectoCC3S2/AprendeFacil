import Wrapper from './Wrapper';
import React, {useEffect, useState} from 'react';
import { getPublicacion } from "./apiCore"
import {Link} from "react-router-dom";
import axios from 'axios';

class Prueba extends React.Component {
  state = {
    publicaciones: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/publicacion/publicaciones`)
      .then(res => {
        const publicaciones = res.data.data;
        this.setState({ publicaciones });
      })
  }

  render(){
    return(
      <Wrapper>
        <h1>Lista de todas las preguntas en el Foro</h1>
        <div className = "container">
        <div className = "row">
              <div className = "container">
                <div className = "row"> 
                {this.state.publicaciones.map( publicacion => (
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
        </div>
      </Wrapper>
    );
  }
}

export default Prueba
 /*
 {this.state.publicaciones.map( publicacion => (
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
 */

  /*
  const [publicaciones, setPublicaciones] = useState([{
    "tags":[""],
    "_id":"",
    "votes":0,
    "title":"", 
    "comment":"",
    "userData":{"photo":"","name":""},
    "createdAt":"",
    "updatedAt": "",
    "__v":0}, {}]);

  const [error, setError] = useState(false);
*/