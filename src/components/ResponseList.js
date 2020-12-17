import Comment from "./Comment";

function ResponseList(props) {
  return (
    <div>
      <h3 className="aswer-title">Respuestas anteriores</h3>
      {
        props.responses.map(response => (
          <Comment
            isQuestion={false}
            comment={response.comment}
            userData={response.userData}
          />
        ))
      }
    </div>
  )
}

export default ResponseList