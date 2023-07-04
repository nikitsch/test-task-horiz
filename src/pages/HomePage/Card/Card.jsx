import { Link } from "react-router-dom"
import style from "./Card.module.css"

export function Card({ product }) {
  // console.log(product.id);
  return (
    <Link to={`/product/${product.id}`} className={style.link} style={{ textDecoration: 'none' }}>
      <div className={style.card}>
        <img className={style.image} src={product.image} alt="" />
        <h3 className={style.title}>{product.title}</h3>
        {/* <h2 className={style.price}>{product.price} BYN</h2> */}
      </div>
    </Link>
  )
}