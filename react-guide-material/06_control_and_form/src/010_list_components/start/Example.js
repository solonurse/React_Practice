
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = [];
  for(const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloanimals = animals.map((animal) => <li>Helo, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList} */}
        {/* {helloanimals} */}
        {animals.map((animal) => <li>Helo, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
