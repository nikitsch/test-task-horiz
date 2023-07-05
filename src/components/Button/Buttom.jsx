import style from "./Button.module.css"

export function Button({ onClick, text, bColor }) {
  return (
    <button
      onClick={onClick}
      className={style.button}
      style={{backgroundColor: bColor}}
    >
      {text}
    </button>
  )
}