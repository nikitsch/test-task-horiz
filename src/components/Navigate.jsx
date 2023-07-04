import {Link} from "react-router-dom"
import style from "./Navigate.module.css"

export function Navigation() {
  return (
    <div className={style.bar}>
      <Link to="/" className={style.link}>Home</Link>
      <Link to="/basket" className={style.link}>Basket</Link>
    </div>
  )
}