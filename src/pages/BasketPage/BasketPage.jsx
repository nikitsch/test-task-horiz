import { useSelector } from "react-redux";
import { useActions } from "../../store/shopAPI/actions";
import { useSearchProductsQuery } from "../../store/shopAPI/shop.api";
import { Link } from "react-router-dom"
import style from "./BasketPage.module.css"
import { Button } from "../../components/Button/Buttom";

export function BasketPage() {

  const { removeBasket } = useActions()

  const { isLoading, isError, data: products } = useSearchProductsQuery()

  const { basket } = useSelector(state => state.shop)
  const goods = products?.filter(el => basket.includes(el.id))
  const count = Math.ceil(goods?.map(cost => cost.price).reduce((p, c) => p + c, 0)*100)/100

  return (
    <>
      {isError && <p className={style.error}>Something went wrong...</p>}

      {isLoading
        ? <p className={style.loading}>Loading...</p>
        : <>
          {goods?.length !== 0
            ? <>
              {goods?.map(item => {
                return (
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', cursor: "help" }}>
                    <div key={item.id} className={style.prod}>
                      <img className={style.image} src={item.image} alt="" />
                      <h1 className={style.title}>{item.title}</h1>
                      <h1 className={style.price}>{item.price}$</h1>
                      <Button onClick={((event) => {
                        event.preventDefault()
                        removeBasket(item.id)
                      })} text={"Delete"} bColor={"rgb(110, 41, 41)"} />
                    </div>
                  </Link>
                )
              })}
              <div className={style.contButton}>
                <h3 className={style.countPrice}>Total price: {count}$</h3>
                {/* <Button onClick={addToBasket} text={"Buy"} bColor={"#0d9488"}/> */}
                <Link to="/" className={style.linkBuy}>
                  <button className={style.buttonBuy}
                    onClick={() => {
                      alert(`Congratulations! We bought a product worth ${count}$`)
                      goods?.map(j => removeBasket(j.id))
                    }}>
                    Buy
                  </button>
                </Link>
              </div>
            </>

            : <div className={style.notSelected}>You have not selected a product. Please return to the main page and add the item to your <span className={style.anim}>basket</span></div>
          }
        </>
      }
    </>

  )
}