import { useSearchProductsQuery } from "../../store/shopAPI/shop.api"
import style from "./HomePage.module.css"

export function HomePage() {
  const {isLoading, isError, data} = useSearchProductsQuery()
  console.log(data);
  return (
    <>
    {isError && <p className={style.error}>Something went wrong...</p>}
    {isLoading && <p className={style.loading}>Loading...</p>}
    <div>Home</div>
    </>
  )
}