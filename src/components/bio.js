/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/mate.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /><StaticImage
      className="bio-avatar"
      layout="fixed"
      formats={["auto", "webp", "avif"]}
      src="../images/mate.png"
      width={50}
      height={50}
      quality={100}
      alt="Profile picture"
    /> */}
      {author?.name && (
        <p>
          A blogot <strong>{author.name}</strong> írta. {author?.summary || null}
          {` `}Kövesd be{` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
             Bálintot  
          </a>
          {` `}és{` `}
          <a href={`https://twitter.com/${social?.twitter2 || ``}`}>
            Mátét
          </a>
          {` `}
          Twitteren!
        </p>
      )}
    </div>
  )
}

export default Bio
