import HeaderQuestion from "./HeaderQuestion";
//import ResponseList from "./ResponseList";
import AnswerForm from "./AnswerForm";
import * as React from "react";
import Wrapper from "./Wrapper";
import axios from 'axios';
import { withRouter } from "react-router";
import {BiDownArrow, BiUpArrow} from 'react-icons/bi';

class CustomLayout extends React.Component {

  state = {
      responses : [],
      post: {},
      solutions: [],
      tags: []
  };

  formatDate(date) {
    date.toString();
    const a = date.replace(/(\d+)-(\d+)-(\d+).+/g, '$3 / $2 / $1');
    console.log(a);
    return(a)  
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:4000/api/publicacion/${id}`)
    .then(res => {
      //console.log(res.data);
      const respost = res.data;
      const restags = res.data.tags;
      this.setState({post: respost});
      this.setState({tags: restags});
    })
     

    axios.get(`http://localhost:4000/api/solucion/soluciones/${id}`)
    .then(res => {
      console.log(id);
      const ressolution = res.data.data;
      console.log(res.data.data);
      this.setState({solutions: ressolution});
      console.log(this.state.solutions);
    })

  }

  handleClick() {
    console.log('Se hizo click');
  }

  increment(solution){
    console.log('Se hizo click');
    console.log(solution);
    const newvote = solution.votes + 1;
    console.log("newvote: "+newvote);
    axios.put(`http://localhost:4000/api/solucion/${solution._id}`, 
    {
      solution:solution.solution,
      votes:newvote,
      idpost:solution.idpost
    }).then(response => {
        window.location.reload();
        console.log(response); 
    })
  }
  
  decrement(solution){
    console.log('Se hizo click');
    console.log(solution);
    const newvote = solution.votes - 1;
    console.log("newvote: "+newvote);
    axios.put(`http://localhost:4000/api/solucion/${solution._id}`, 
    {
      solution:solution.solution,
      votes:newvote,
      idpost:solution.idpost
    }).then(response => {
        window.location.reload();
        console.log(response); 
    })
  }

  render(){
    let variable ;
    if(this.state.post.createdAt){
      variable = this.formatDate(this.state.post.createdAt)
    }
  return (
    <Wrapper>
      <div className="main-question">
        <HeaderQuestion title={this.state.post.tittle} />
        <div className="comment__main">
          <div className="comment__data">
            <p>
              {this.state.post.comment}
            </p>
          </div>

          <div className="comment__tag">
          {this.state.tags.map(tag => (
                  <span>{tag}</span>
                ))}
          </div> 

          <div className="data__container">
            <span className="post__data">Publicado por:</span>
            <div className="data__user">
              <div className="comment__user--photo">
                  <img src={this.state.post.userPhoto} alt="Usuario"/>
                </div>
              <div className="comment__user--data">
                <span>{this.state.post.user}</span>
                <span>{ variable }</span>
              </div>
            </div>
          </div>

        </div>

        <AnswerForm />

        <h3 className="aswer-title">Respuestas anteriores</h3>
        
          {this.state.solutions.map(solution => (
            <div className="comment answer-container">
              <div className="comment__vote">
              <div className="vote-button" onClick={() => this.increment(solution)}>
                <BiUpArrow/>
              </div>
              <div>
                {solution.votes}
              </div>
              <div className="vote-button" onClick={() => this.decrement(solution)}>
                <BiDownArrow/>
              </div>
            </div>
              <div className="comment__main">
                <div className="comment__data">
                  <span>{solution.solution}</span>
                </div>     
                <div className="comment__response">
                  <div className="comment__user">
                  <div className="comment__user--photo">
                    <img src={solution.userPhoto} alt="Usuario"/>
                  </div>
                    <div className="comment__user--data">
                      <span>{solution.user}</span>
                      <span>{this.formatDate(solution.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
                ))}
          </div>

      
    </Wrapper>
  )
}
}

export default withRouter(CustomLayout);
