import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
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

/*   Guarda() {
    axios.post(`https://cors-anywhere.herokuapp.com/http://localhost:4000/api/publicacion/createpublicacion`)
      .then(res => {
        const publicaciones = res.data.data;
        this.setState({ publicaciones });
      })
  } */

  render() {
    return (
      <ul>
        { this.state.publicaciones.map(person => <li>{person.tags}</li>) }
      </ul>
    )
  }
}