import { createElement, Fragment, ReactNode  } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import remarkPrism from 'remark-prism'
import rehypeParse from 'rehype-parse'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeReact from 'rehype-react'
import { CustomCode } from './CustomCode'
import { unified } from 'unified'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import {
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"


function MyLink({ children, href }: any) {
  if (href === '') href = '/';
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

const MyImage = ({ src, alt }: any) => {
  return (
    <div className="relative max-w-full h-96">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}

const toReactNode = (content: string) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
}

export const getStaticProps: ({ params, }: { params: any }) => Promise<{ props: { frontMatter: { [key: string]: any }; content: string; } } | undefined> = async ({
  params,
}) => {
  if (params) {
    const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8')
    const { data, content } = matter(file)
    const result = await unified()
      .use(remarkParse)
      .use(remarkPrism, {
        plugins: ['line-numbers'],
      })
      .use(remarkToc, {
        heading: '目次',
      })
      .use(remarkUnwrapImages)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(CustomCode)
      .use(rehypeSlug)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content)
    // console.log('result:',result);
    return { props: { frontMatter: data, content: result.toString(), slug: params.slug } }
  }
  
}

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }))
  console.log('paths:', paths)
  return {
    paths,
    fallback: false,
  }
}

const Post: ({ frontMatter, content, slug }: { frontMatter: any; content: any; slug: any }) => JSX.Element = ({ frontMatter, content, slug }) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          url: `http:localhost:3000/blog/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://localhost:3000/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <div className="blog prose prose-lg max-w-none mx-3">
        <div className="">
          <Image
            src={`/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
          />
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        <div className="space-x-2">
          {frontMatter.categories.map((category: string) => (
            <span key={category}>
              <Link href={`/categories/${category}`}>
                {category}
              </Link>
            </span>
          ))}
        </div>
        <div className='text_pre'>
          {toReactNode(content)}
        </div>
      </div>
    </>
  )
}

export default Post