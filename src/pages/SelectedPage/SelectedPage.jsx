import { useParams } from "react-router-dom"
import { useSearchProductsQuery } from "../../store/shopAPI/shop.api";

export function SelectedPage() {
  const prodId = useParams().id

  const { data: products } = useSearchProductsQuery()

  const good = products.find(function (item) {
    return item.id == prodId;
  });

  return (
    <div>Selected: <span style={{fontWeight: 700}}>{good.title}</span></div>
  )
}