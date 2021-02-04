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
              </div>
            </div>
                ))}
          </div>

      
    </Wrapper>
  )
}
}

export default withRouter(CustomLayout);
/*
        <div className="comment__main">
        {this.state.solutions.map(solution => (
                <span>{solution.solution}</span>
              ))}
        </div> */
/*
<div className="comment__main">
        <div className="comment__data">
          <p>
            {props.comment}
          </p>
        </div>
          <div className="comment__tag">
            {
              props.tags.map(tag => (
                <span>{tag}</span>
              ))}
          </div>
        </div>
*/
/*
    axios.get(`http://localhost:4000/api/solucion/soluciones/${id}`)
    .then(res => {
      console.log(id);
      const ressolution = res;
      this.setState({solutions: ressolution});
    })

 */
/*

  const getPost = (id) => {
    return fetch(      
      `http://localhost:4000/api/publicacion/${id}`,
      {
          //crossDomain:true,
          method: 'GET',
          //headers: {'Content-Type':'application/json'},
      })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        //console.log(`http://localhost:4000/api/publicacion/${id}`);
        setPost(res => res=result);
        console.log(post); 
      }
      )
      .catch((err) => console.log('error: No funciona el GET'))
  };



  const getSolutions = () => {
    return fetch(      
      `http://localhost:4000/api/solucion/soluciones/${id}`,
      {
          crossDomain:true,
          method: 'GET',
          headers: {'Content-Type':'application/json'},
      })
      .then((res) => res.json())
      .then( result => {
        console.log(result);
        setSolutions(result);
      })
      .catch((err) => console.log('error'))
  };
*/
/*
function CustomLayout() {
  const { id } = useParams();
  console.log(id);

  //const question = [];//questions.find(question => question.id === id);
  const [question, setQuestion] = React.useState([]);
  const [responses, setResponse] = React.useState([]);

  const user = {
    name: 'Rosa',
    photo: 'https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png'
  }
 
  useEffect(() => {
    
    return () => {
      cleanup
    }
  }, [input])

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

export default CustomLayout;


*/