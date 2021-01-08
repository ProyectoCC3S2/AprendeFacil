import {BiDownArrow, BiUpArrow} from 'react-icons/bi';

function Comment(props) {

  const formatDate = (date) => {
    return (date)
      .toString()
      .replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, '$2 $1, $3');
  }

  return (
    <div className={props.isQuestion ? "comment" : "comment answer-container"}>
      {
        props.isQuestion && (
          <div className="comment__vote">
            <div className="vote-button" onClick={props.increment}>
              <BiUpArrow/>
            </div>
            <div>
              {props.votes}
            </div>
            <div className="vote-button" onClick={props.decrement}>
              <BiDownArrow/>
            </div>
          </div>
        )
      }
      <div className="comment__main">
        <div className="comment__data">
          <p>
            {props.comment}
          </p>
        </div>
        {props.isQuestion && (
          <div className="comment__tag">
            {
              props.tags.map(tag => (
                <span>{tag}</span>
              ))
            }
          </div>
        )}
        <div className="comment__response">
          <div className="comment__user">
            <div className="comment__user--photo">
              <img src={props.userData.photo} alt="foto"/>
            </div>
            <div className="comment__user--data">
              <span>{props.userData.name}</span>
              <span>{formatDate(props.userData.dateCreated)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment