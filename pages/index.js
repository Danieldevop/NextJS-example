import Layout from '../comps/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link prefetch as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="Hello Next.js" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />            
    </ul>
  </Layout>
)
