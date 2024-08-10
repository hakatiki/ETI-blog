import * as React from "react"
import { Link, graphql } from "gatsby"
import EmailCopyButton from "../components/emailcopy"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          gap: "1rem",
          padding: "1rem",

        }}
      >
        <a
          href={`https://x.com/hakatiki1`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: "#000000",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            transition: "background-color 0.3s",
          }}
        >
          Bálint
          <RiTwitterXFill style={{ marginLeft: "0.5rem" }} />
        </a>
        <a
          href={`https://x.com/egrimate1`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: "#000000",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            transition: "background-color 0.3s",
          }}
        >
          Máté
          <RiTwitterXFill style={{ marginLeft: "0.5rem" }} />
        </a>
        <EmailCopyButton />
      </div>
      
      
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const released = post.frontmatter?.released || `No`
          if (released ===`No`){
            return ""
          }
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
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
          released
        }
      }
    }
  }
`
