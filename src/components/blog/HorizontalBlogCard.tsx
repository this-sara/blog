import { FC } from 'react'
import { formatDate } from '../../utils'

interface BlogPost {
  title: string
  shortDescription: string
  cover: string
  slug: string
  publishDate: string
  estimatedTimeToRead: string
}

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const { title, shortDescription, cover, slug, publishDate, estimatedTimeToRead } = post

  return (
    <div key={slug} className="bg-light flex flex-col gap-3 rounded-lg border p-3 lg:flex-row">
      <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-125"
          src={cover}
          alt="demo"
        />
      </figure>

      <a href={`/${slug}`}>
        <h3 className="hover:text-theme text-primary mb-2 text-xl font-bold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-700">{shortDescription}</p>
        <p className="text-primary mt-4 text-sm font-semibold">
          {formatDate(publishDate)} | {estimatedTimeToRead}
        </p>
      </a>
    </div>
  )
}

export default BlogCard
