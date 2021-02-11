import HeaderQuestion from "./HeaderQuestion";
import * as React from "react";
import Wrapper from "./Wrapper";
import axios from 'axios';

class PostbyUser extends React.Component {

  state = {
      posts: []
  };

  componentDidMount() {
    let usuariobj = localStorage.getItem("usuario");
	const usuario = JSON.parse(usuariobj);

    console.log(usuario);

    axios.get(`http://localhost:4000/api/publicacion/publicaciones/${usuario.nickname}`)
    .then(res => {
      const respost = res.data.data;
      console.log(respost);
      this.setState({posts: respost});
    })
  }

  render(){
    let misposts;
    let misposts2;
    if( this.state.posts ){
        misposts = this.state.posts.map( post => (
            <div className="comment answer-container">
                <div className="main-question">
                    <h3 className="post-tittle">{post.tittle}</h3> 
                    <div className="comment__main">
                        <div className="comment__data">
                        <p>
                            { post.comment }
                        </p>
                        </div>
                        <div className="comment__tag">
                            {post.tags.map(tag => (
                                <span>{tag}</span>
                            ))}
                        </div> 
                    </div> 
                </div> 
            </div>
     
        ))
    }
    if( this.state.posts.length === 0 ){
        misposts2 = <h3>Aún no hay publicaciones c:</h3>
    }
  return (
    <Wrapper>
        <div>
            {misposts}
            {misposts2}
        </div>
    </Wrapper>
  )
}
}
export default PostbyUser
