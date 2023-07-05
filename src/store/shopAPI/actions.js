import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { shopActions } from "./shop.slice"


const actions = {
  ...shopActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}