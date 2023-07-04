import style from "./Card.module.css"

export function Card({item}) {
  return (
    <div className={style.card}>
      <img className={style.image} src={item.image} alt="" />
      <h3 className={style.title}>{item.title}</h3>
      {/* <h2 className={style.price}>{item.price} BYN</h2> */}
    </div>
  )
}