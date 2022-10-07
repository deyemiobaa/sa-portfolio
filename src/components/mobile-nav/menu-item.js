import React from "react";

export default function MenuItem({ pathName, path, handleClickProp }) {

  return (
    <a
      href={path}
      className="py-2 mb-2 text-lg font-bold mobile-nav__item text-neutral-900"
      onClick={handleClickProp}
      style={{ color: 'black', border: 'none' }}
    >
      {pathName}
    </a>
  )
}