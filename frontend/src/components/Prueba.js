import Wrapper from './Wrapper';
import React, {useEffect, useState} from 'react';
import { getPublicacion } from "./apiCore"
import {Link} from "react-router-dom";
import { SketchOutlined } from '@ant-design/icons';
import axios from 'axios';

class Prueba extends React.Component {
  state = {
    publicaciones: [],
    publicacionesBackup: [],
    textBuscar: ''
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/publicacion/publicaciones')
      .then(res => {
        this.setState({ 
          publicaciones: res.data.data,
          publicacionesBackup: res.data        
        })
      })
  }

 /*  Guarda() {
    axios.post('https://cors-anywhere.herokuapp.com/http://localhost:4000/api/publicacion/createpublicacion')
      .then(res => {
        this.setState({ 
          publicaciones: res.data.data,
          publicacionesBackup: res.data        
        })
      })
  } */

  filtro(event){
    console.log(event.target.value)
    // Obtener datos de buscar
    let text = event.target.value
    // Obtener datos de array
    let data = [] = this.state.publicacionesBackup.data

    let newData = data.filter(function(item){
        // Variable de titulo
        let itemDataTittle = item.tittle.toUpperCase() // titulo se refiere al titulo de la publicación en la base de datos
        // Variable de la descripción 
        let itemDataComment = item.comment.toUpperCase() // comment se refiere a la descripción de la publicación en la base de datos
        let itemData = itemDataTittle + ' ' + itemDataComment
        // Variable de buscar
        let textData = text.toUpperCase()
        // Filtrado para ver si es verdadero o no, luego de retorna
        return itemData.indexOf(textData) > -1
    })
    
    this.setState({
        publicaciones: newData,
        textBuscar: text,
    })

 }

  render(){
    let usuariobj = localStorage.getItem("usuario")
    if( !usuariobj){
      window.location.href = "/IniciarSesion"
    }
    return(
      <Wrapper>
        <h1>Lista de todas las preguntas en el Foro</h1>
        <div className="search_tittle">
            Buscador:
            <input className="create-form-input__search" placeholder="Ingresar titulo, descripción o palabra clave..."  value={this.state.text} onChange={(text) => this.filtro(text)}/>
        </div>
        <br></br>
        <br></br>
        <div className = "container">
        <div className = "row">
              <div className = "container">
                <div className = "row"> 
                {this.state.publicaciones.map( publicacion => (
                  <Link to={`/pregunta/${publicacion._id}`}>
                    <div className="question">

                      <div className="question__vote">
                        {publicacion.coins}<SketchOutlined />
                      </div>
                      <div className="question__info">
                        <div className="question__info--comment">
                        <div className="question__info--title">{publicacion.tittle}</div>
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
                            {publicacion.userData? publicacion.userData.name:""}
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