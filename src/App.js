import { useState } from "react";
import Products from "./components/Products";
import Card from "./components/Card";

function App() {

  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Prod 1",
      count: 5,
      price: 1000,
      img:"https://th.bing.com/th/id/R7a7d75952c1e0102bd39bc3cf09b7f07?rik=PzMN%2bKMIM8boXg&pid=ImgRaw"
    },
    {
      id: 2,
      name: "Prod 2",
      count: 4,
      price: 1000,
      img: "https://www.daswillichwissen.de/wp-content/uploads/2020/01/Rote-Beete-1024x684.jpg"
    },
    {
      id: 3,
      name: "Prod 3",
      count: 200,
      price: 1000,
      img: "https://azar-sabz.com/uploads/6a4f002125ab43ad8081c72b18a11d01.w_554,h_515,r_k.jpg"
    },
    {
      id: 4,
      name: "Prod 4",
      count: 200,
      price: 1000,
      img: "https://www.tapeciarnia.pl/tapety/normalne/262409_brzoskwinie_liscie_pestka.jpg"
    }
  ]);

  const [card, setCard] = useState([])

  const [sum, setSum] = useState([0])

  const add = (item) => {
    if(item.count > 0){
      let basketProd = Object.assign({quantity: 1}, item)
      let findProd = card.find(elem => {
        return elem.id === item.id
      })
      if(findProd){
        findProd.quantity++
      }else{
        setCard([...card, basketProd])
      }
      item.count--
    }
    else{
      alert("No Product")
    }
    sumPrice()
  }

  const sumPrice = () => {
    let priseSum = 0  
    card.forEach(item => {
        priseSum += item.count * item.price
      })
    setSum(priseSum)
  }
  
  const del = (id) => {
      let arr = card.filter(item => item.id !== id)
      setCard(arr)
  }

  return (
    <div className = "row mw-100">
        <div className = "col-6">
          <Products data = {products} add = {add}/>
        </div>
        <div className = "col-6">
            <Card data = {card} del = {del} sum = {sum}/>
        </div>
    </div>
  );
}

export default App;
