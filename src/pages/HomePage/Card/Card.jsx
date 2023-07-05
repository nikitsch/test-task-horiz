import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useActions } from "../../../store/shopAPI/actions"
import style from "./Card.module.css"

export function Card({ product }) {

  const {addBasket, removeBasket} = useActions()
  const {basket} = useSelector(state => state.shop)

  const [isShop, setIsShop] = useState(basket.includes(product.id))

  const addToBasket = (event) => {
    event.preventDefault()
    addBasket(product.id)
    setIsShop(true)
  }

  const removeToBasket = (event) => {
    event.preventDefault()
    removeBasket(product.id)
    setIsShop(false)
  }
// console.log(product.title.length);
  return (
    <Link to={`/product/${product.id}`} className={style.link} style={{ textDecoration: 'none' }}>
      <div className={style.card}>
        <img className={style.image} src={product.image} alt="" />
        <h3 className={style.title}>{product.title.length > 64 ? product.title.slice(0, 63) + "..." : product.title}</h3>
        {/* <h2 className={style.price}>{product.price} BYN</h2> */}

        {!isShop
          ? <button onClick={addToBasket} style={{cursor: "pointer", backgroundColor: "green"}}>+</button>
          : <button onClick={removeToBasket} style={{cursor: "pointer", backgroundColor: "red"}}>-</button>
        }
      </div>
    </Link>
  )
}