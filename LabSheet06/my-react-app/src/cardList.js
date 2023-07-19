function CardList(props) {
    return (
      <div>
        <h1>Card List</h1>
        <ul>
          {props.cardList.map((card) => {
            return <li>{card}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  export default CardList;