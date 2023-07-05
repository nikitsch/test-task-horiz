import { useSelector } from "react-redux";
import { useSearchProductsQuery } from "../../store/shopAPI/shop.api";
import style from "./BasketPage.module.css"

export function BasketPage() {

  const { isLoading, isError, data: products } = useSearchProductsQuery()
  const { basket } = useSelector(state => state.shop)
  const goods = products?.filter(el => basket.includes(el.id))
  console.log(goods)

  return (
    <>
      {isError && <p className={style.error}>Something went wrong...</p>}
      {isLoading && <p className={style.loading}>Loading...</p>}

      {/* {basket
        ? <>
          <div className={style.container}>
            {products?.map(item => {
              <Card product={item} key={item.id} />
            })}
          </div>
        </>

        : <div>You have not selected a product. Please return to the main page and add the item to your basket</div>
      } */}

    </>

  )
}