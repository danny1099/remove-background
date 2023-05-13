import css from './container.module.scss'

export default function Container({ children }) {
  return (
    <div className={css.container}>{children}</div>
  )
}
