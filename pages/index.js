import Layout from '../comps/MyLayout'
import Link from 'next/link'

function getPosts () {
  return [
    { 'id': "Hello Next.js", 'title': "Hello Next.js" },
    { 'id': "learn-nextjs", 'title': "Learn Next.js is awesome" },
    { 'id': "deploy-nextjs", 'title': "Deploy apps with Zeit" },
  ]
}



const PostLink = (props) => (
  <li>
    <Link prefetch as={`/p/${props.post.id}`} href={`/post?title=${props.title}`}>
      <a>{props.post.title}</a>
    </Link>
    <style jsx>{`
      a {
        font-family: "Arial";
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }  
    `}</style>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        getPosts().map((post) => (
          <PostLink key={post.id} post={post} />
        ))
      }          
    </ul>

    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }  
    `}</style>
  </Layout>
)

