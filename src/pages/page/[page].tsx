import fs from 'fs'
import matter from 'gray-matter';
import { Pagination } from '@/components/blog/Pagination';
import { PostCard } from '@/components/blog/PostCard'

const PAGE_SIZE = 2;

const range: (start: any, end: any, length?: number) => any[] = (start, end, length = end - start + 1) => {
  return Array.from({ length }, (_, i) => start + i)
}

export async function getStaticProps({ params }: any) {
  const current_page = params.page;
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);

    return {
      frontMatter: data,
      slug,
    };
  });

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  const slicedPosts = sortedPosts.slice(
    PAGE_SIZE * (current_page - 1),
    PAGE_SIZE * current_page
  );

  return {
    props: {
      posts: slicedPosts,
      pages,
      current_page,
    },
  };

}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const count = files.length;

  const paths = range(1, Math.ceil(count / PAGE_SIZE)).map((i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}



const Page: any = ({ posts, pages, current_page }: { posts: any; pages: number[]; current_page: number}) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mx-3">
        {posts.map((post: any) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <div className='mx-auto'>
        <Pagination pages={pages} current_page={current_page} />
      </div>
      
    </div>
  );
};

export default Page