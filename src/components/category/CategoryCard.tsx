import React from 'react'

interface CategoryProps {
  imageSrc: string
  altText: string
  categoryName: string
}

const Category: React.FC<CategoryProps> = ({ imageSrc, altText, categoryName }) => {
  return (
    <a className="flex cursor-pointer flex-col">
      <figure className="bg-light hover:bg-light-hover relative h-[86px] w-[86px] overflow-hidden rounded-full transition-colors duration-300">
        <img
          className="absolute inset-0 h-full w-full transform rounded-md object-contain p-4 transition-transform duration-300 ease-in-out hover:scale-110"
          src={imageSrc}
          alt={altText}
        />
      </figure>
      <h3 className="text-secondary mt-3 text-center text-base font-semibold">{categoryName}</h3>
    </a>
  )
}

export default Category
