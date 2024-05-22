import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css'

// FETCH DATA WITH API
// https://next-posts-git-main-jexarx121s-projects.vercel.app
const getData = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/blog`, {next: {revalidate: 3600}});

  if (!res.ok) {
    console.log(res);
    console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    throw new Error("Something went wrong")
  }

  return res.json();
}

const BlogPage = async () => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map(post => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post}/> 
      </div>
      ))}
    </div>
  )
};

export default BlogPage;