import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import Hi from './components/Hi';
import Form from './components/Form';
import Data from './components/Data';
import Address from './components/Address';
import Cars from './components/Cars';
import Example from './components/Example';

function App() {
  // const user = {
  //   firstName: 'Rami',
  //   lastName: 'Tounsi',
  //   address: 'Sfax',
  //   isPresent: true,
  // };
  const cars = [
    {
      id: 0,
      brand: 'Bugatti',
      price: '1000k',
    },
    {
      id: 1,
      brand: 'Tesla',
      price: '150k',
    },
    {
      id: 2,
      brand: 'Lamborghini',
      price: '700k',
    },
  ];

  // we will create a function that shows each car's price

  // const handlePrice = (name, price) => alert(`${name} costs ${price}`);

  return (
    <div className="App">
      {/* <Data aymen={user} />
      <Address adresse={user} /> */}
      {/* <Cars car={cars} func={handlePrice} /> */}
      <Example name={5}>
        <h1>Child 1</h1>
        <p>child 2</p>
        <h2> child 3 </h2>
      </Example>
    </div>
  );
}

export default App;
