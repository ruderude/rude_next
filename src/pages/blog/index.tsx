import fs from 'fs'
import matter from 'gray-matter'
import type { NextPage } from 'next'
import Link from 'next/link'
import { PostCard } from '@/components/blog/PostCard'
import { Post } from '@/types/blog'
import { Pagination } from '@/components/blog/Pagination'

interface Props {
  posts: Post[]
  pages: number[]
  current_page: number
}

const PAGE_SIZE = 2;

const range: (start: any, end: any, length?: number) => any[] = (start, end, length = end - start + 1) => {
  return Array.from({ length }, (_, i) => start + i)
}


export const getStaticProps = () => {
  const files = fs.readdirSync('posts')
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(fileContent)
    return {
      frontMatter: data,
      slug,
    }
  })

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  )

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  return {
    props: {
      posts: sortedPosts.slice(0, PAGE_SIZE),
      pages,
    },
  }
}

const Blog = ({ posts, pages, current_page = 1 }: Props): JSX.Element => {

  return (
    <>
      <div className="my-8">
        <div className="grid grid-cols-3 gap-4 mx-3">
          {posts.map((post) => (
            <div key={post.slug}>
              <PostCard post={post} key={post.slug} />
            </div>
          ))}
        </div>
        <Pagination pages={pages} current_page={current_page} />
      </div>
    </>
  )
}

export default Blog