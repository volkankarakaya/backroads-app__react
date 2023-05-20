import React from 'react'

const PageLink = ({id,href,itemClass,text}) => {
  return (
    <li >
            <a href={href} className={itemClass}>{text}</a>
        </li>
  )
}

export default PageLink