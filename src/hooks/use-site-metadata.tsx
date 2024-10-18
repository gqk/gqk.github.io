import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navItems {
            text
            href
          }
          siteUrl
          profile {
            name
            role 
            affiliation
            email
            socialLinks {
              icon
              url
            }
            avatar
            authorName
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}