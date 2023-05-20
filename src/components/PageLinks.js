import React from 'react';
import { pageLinks } from '../data';

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id={parentClass}>
    {pageLinks.map((link) => {
        return <li>
            <a href={link.href} className={itemClass} key={link.id}>{link.text}</a>
        </li>
    })}
 
</ul>
  )
}

export default PageLinks