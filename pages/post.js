import Layout from '../comps/MyLayout'
import Markdown from 'react-markdown'

export default (props) => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    
    <div className="markdown">
      <Markdown source={`
        This is our blog post.
        Yes. we can have a.
        And we can have a title as well.

        ### This is a title

        And here's the content.
      
      `}/>
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: red;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
)