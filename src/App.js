import logo from './logo.svg';
import './App.css';
import Name from './componet/Name';
import Price from './componet/Price';
import Description from './componet/Description';
import Image from './componet/Image';

function App() {
  const product={
    name:"pc",
    price:"3000 dt",
    description:"pc laptop mac",
    img:"https://mtsplus.tn/2650-large_default/pc-portable-hp-15-dw3010nk-i5-11e-gen-8go-1to.jpg",
  }
  return (
    <div className="App">
      <Name name={product.name}/>
      <Price Price={product.price}/>
      <Description Description={product.description}/>
      <Image Image={product.img}/>
    </div>
  );
}

export default App;
