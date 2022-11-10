import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/@types/blog'

interface Props {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='border rounded-lg'>
        <Image
          src={`/${post.frontMatter.image}`}
          width={1200}
          height={700}
          alt={post.frontMatter.title}
        />
      </div>
      <div className='px-2 py-4'>
        <h1 className='font-bold text-lg'>{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
        {/* <span key={category}>
          <Link href={`/categories/${category}`}>
            {category}
          </Link>
        </span> */}
      </div>
    </Link>
  )
}
