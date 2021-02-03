import * as React from "react";
import Comment from "./Comment";

function Question(props) {
  //const [votes, setVotes] = React.useState(props.tags.votes);
/*
  const incrementVote = () => {
    setVotes(votes + 1 )
  }

  const decrementVote = () => {
    setVotes(votes - 1)
  }
*/
  return (
    <div>
      <Comment
        isQuestion={true}
        //userData={props.post.userData}
        tags={props.tags}
        comment={props.comment}
      />
      <div className="divider"/>
    </div>
  )
}

export default Question