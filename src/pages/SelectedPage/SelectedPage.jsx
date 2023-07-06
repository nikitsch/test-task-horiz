import { useParams } from "react-router-dom"
import { useSearchProductsQuery } from "../../store/shopAPI/shop.api";
import style from "./SelectedPage.module.css"

export function SelectedPage() {
  const prodId = useParams().id

  const { isLoading, isError, data: products } = useSearchProductsQuery()

  const good = products.find(function (item) {
    return item.id == prodId;
  });

  return (
    <>
      {/* <div>Selected: <span style={{ fontWeight: 700 }}>{good.title}</span></div> */}
      {isError && <p className={style.error}>Something went wrong...</p>}

      {isLoading
        ? <p className={style.loading}>Loading...</p>
        : <div className={style.container}>
          <img className={style.image} src={good.image} alt="" />
          <div className={style.infoBlock}>
            <h1 className={style.title}>{good.title}</h1>
            <h3 className={style.description}>{good.description}</h3>
            <h2 className={style.price}>{good.price} BYN</h2>
          </div>
        </div>
      }
    </>
  )
}