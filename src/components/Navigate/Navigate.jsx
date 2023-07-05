import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import style from "./Navigate.module.css"

export function Navigation() {
  const { basket } = useSelector(state => state.shop)
  // const round = basket?.length > 9 ? "padding: '0px'" : "padding: '50px'"
  return (
    <div className={style.bar}>
      <Link to="/" className={style.link}>Home</Link>
      <Link to="/basket" className={style.link}>
        <span className={style.cauntThinks}>{basket?.length}</span>
        Basket
      </Link>
    </div>
  )
}