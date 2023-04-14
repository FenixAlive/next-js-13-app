import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
const ListOfPosts = async () => {
  const posts = await fetchPosts()
  // this is executed on server
  return posts.slice(0, 10).map(post => (
    <article key={post.id}>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
}

export default ListOfPosts
