import '../styles/cardItem.css';

function CardItem(props) {
  return (
    <div className="card-item d-flex flex-wrap border-bottom mb-2 align-items-center">
      <h2 className="organisation text-left">{props.organisation}</h2>
      <i className="fas fa-edit mx-2" onClick={props.onClickEdit}></i>
      <i className="fas fa-trash mr-auto" onClick={props.onClickTrash}></i>
      <p className="dates text-right">
        {props.tenure.start} - {props.tenure.end}
      </p>
      <p className="title w-100 font-italic text-muted">{props.title}</p>
      <p className="w-100">{props.description}</p>
    </div>
  );
}

export default CardItem;
