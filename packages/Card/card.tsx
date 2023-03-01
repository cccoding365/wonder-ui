import React from "react"
import classNames from "classnames"
import "./style.scss"
import { CardProps } from './props'

function Card(props: CardProps): JSX.Element {
  const { style, size, cardType, className, children, cardTitle, extraContent, bordered, cover, shadows, actions } = props

  const cardClass = classNames("wonder_card", {
    [`wonder_card_shadows_${shadows}`]: true,
    [`wonder_card_${size}`]: true,
    wonder_card_inner: cardType === 'inner',
    wonder_card_border: bordered,
    wonder_card_noContent: children === null,
    [className || ""]: !!className,
  })

  return (
    <div className={cardClass} style={style || undefined}>
      {cardTitle !== "" ? (
        <header className="wonder_card_header">
          {cardTitle}
          <div className="wonder_card_link">{extraContent}</div>
        </header>
      ) : null}
      {cover !== null ? <div className="wonder_card_cover">{cover}</div> : null}
      <main className="wonder_card_main">{children}</main>
      {actions !== null ? (<footer className="wonder_card_footer">{actions}</footer>) : null}
    </div>
  )
}

Card.defaultProps = {
  style: "",
  size: "default",
  cardType: 'outer',
  className: "",
  children: null,
  cardTitle: "",
  extraContent: null,
  bordered: true,
  cover: null,
  shadows: "none",
  actions: null,
}

export default Card;
