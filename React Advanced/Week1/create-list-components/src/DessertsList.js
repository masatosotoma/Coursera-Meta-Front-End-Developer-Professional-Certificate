function DessertsList(props) {
  const listItems = props.map((dessert) => {
    const itemText = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{itemText}</li>;
  });

  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default DessertsList;
