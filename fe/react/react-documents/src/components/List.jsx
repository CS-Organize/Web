const fruits = [
  { name: "apple", id: 1 },
  { name: "grape", id: 2 },
  { name: "pear", id: 3 },
  { name: "mango", id: 4 },
];

const listItem = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);

function List() {
  return <ul>{listItem}</ul>;
}

export default List;
