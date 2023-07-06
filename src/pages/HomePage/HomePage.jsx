import { useState } from "react"
import { useSearchProductsQuery } from "../../store/shopAPI/shop.api"
import { Card } from "./Card/Card"
import style from "./HomePage.module.css"

export function HomePage() {
  const { isLoading, isError, data: products } = useSearchProductsQuery()

  const [filter, setFilter] = useState("all")

  const setToFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const lists = [...new Set(products?.map(item => item.category))]

  return (
    <>
      {isError && <p className={style.error}>Something went wrong...</p>}

      {isLoading
        ? <p className={style.loading}>Loading...</p>

        : <>
          <div className={style.filter}>
            <select onChange={setToFilter}>
              <option>all</option>
              {lists.map(list => <option value={list}>{list}</option>)}
            </select>
          </div>

          <div className={style.container}>
            {products?.map(item => {
              if (filter === "all") return <Card product={item} key={item.id} />
              if (item.category === filter) return <Card product={item} key={item.id} />
            })}
          </div>
        </>
      }
    </>
  )
}