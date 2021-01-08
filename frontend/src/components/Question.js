import * as React from "react";
import Comment from "./Comment";

function Question(props) {
  const [votes, setVotes] = React.useState(props.question.votes);

  const incrementVote = () => {
    setVotes(votes + 1 )
  }

  const decrementVote = () => {
    setVotes(votes - 1)
  }

  return (
    <div>
      <Comment
        isQuestion={true}
        userData={props.question.userData}
        tags={props.question.tags}
        comment={props.question.comment}
        increment={incrementVote}
        decrement={decrementVote}
        votes={votes}
      />
      <div className="divider"/>
    </div>
  )
}

export default Question