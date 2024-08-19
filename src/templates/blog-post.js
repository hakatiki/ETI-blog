import * as React from "react"
import { Link, graphql } from "gatsby"
import LayoutArticle from "../components/layout-article"
import "katex/dist/katex.min.css"
import Sidebar from "../components/Sidebar";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const released = site.siteMetadata?.released || `No`
  
  const siteTitle = site.siteMetadata?.title || `Title`
  const monthNames = [
    "január", // January
    "február", // February
    "március", // March
    "április", // April
    "május", // May
    "június", // June
    "július", // July
    "augusztus", // August
    "szeptember", // September
    "október", // October
    "november", // November
    "december", // December
  ];

  // Function to convert date string to Hungarian format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth(); // 0-11 index for months
    const year = date.getFullYear();
    return `${year}. ${monthNames[monthIndex]} ${day}.`;
  };

  const formattedDate = formatDate(post.frontmatter.date);
  const headings = post.headings.map(heading => ({
    id: heading.id,
    title: heading.value,
  }));

  return (
    <LayoutArticle location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
       <Sidebar headings={headings} />
        <header style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{formattedDate}</p>
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </LayoutArticle>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        released
        image
      }
      headings {
        id
        value
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
