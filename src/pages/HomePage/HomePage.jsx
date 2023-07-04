import { useSearchProductsQuery } from "../../store/shopAPI/shop.api"
import { Card } from "./Card/Card"
import style from "./HomePage.module.css"

export function HomePage() {
  const { isLoading, isError, data: products } = useSearchProductsQuery()
  // console.log(products.map(i => i.title));
  return (
    <>
      {isError && <p className={style.error}>Something went wrong...</p>}
      {isLoading && <p className={style.loading}>Loading...</p>}

      <div className={style.container}>
        {products?.map(item => <Card product={item} key={item.id} />)}
      </div>
    </>
  )
}