import * as React from "react"
import { Link, graphql } from "gatsby"
import SidebarIndex from "../components/sidebar-index"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  var publishedArticleCounter = 0

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
 
  return (
    <Layout location={location} title={siteTitle}>
      <SidebarIndex/>

      <Bio />
      <ol  style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {posts.map(post => {
          var cardColor = "#ffffff"
          if (publishedArticleCounter % 2 == 0){
            cardColor = "#f5f5f5"
          }
          publishedArticleCounter += 1
          const title = post.frontmatter.title || post.fields.slug
          const released = post.frontmatter?.released || `No`
          const imagePath = post.frontmatter?.image || `/default.png`
          const author = post.frontmatter?.author || `Egri Máté és Takáts Bálint`
          if (released ===`No`){
            return ""
          }
          return (
            <li key={post.fields.slug} className="zero-margin-li">
              <article
                className="modern-post post-list-item"
                itemScope
                itemType="http://schema.org/Article"
                style={{backgroundColor: cardColor}}
              >
                <div class="modern-post-content" style={{backgroundColor: cardColor}}>
                  
                <div className="post-container">
                    <div className="text-content">
                      <header className="modern-post-header">
                        <h2>
                          <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <small className="post-date">{post.frontmatter.date}</small>
                        <div className="author">
                          <b>{author}</b>
                        </div>
                      </header>

                      <section className="post-content">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                          className="post-description"
                        />
                        <a href={post.fields.slug} className="read-more">→ Elolvasom</a>
                      </section>
                    </div>
                    <div className="post-image-container">
                      <img src={imagePath} alt="Post related image" className="post-image" />
                    </div>
                  </div>
                </div>
              </article>

            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
          author
          released
          image
        }
      }
    }
  }
`
