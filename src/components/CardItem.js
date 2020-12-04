import '../styles/cardItem.css';

function CardItem(props) {
  return (
    <div className="d-flex flex-wrap border-bottom mb-2 align-items-center">
      <h2 className="organisation w-50 text-left">{props.organisation}</h2>
      <p className="dates w-50 text-right">
        {props.tenure.start} - {props.tenure.end}
      </p>
      <p className="title w-100 font-italic text-muted">{props.title}</p>
      <p className="w-100">{props.description}</p>
    </div>
  );
}

export default CardItem;
