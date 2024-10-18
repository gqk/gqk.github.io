import { graphql, useStaticQuery } from "gatsby"

export const useFeaturedPublications = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { featured: { eq: true }, draft: { eq: false } } }
        sort: { fields: [frontmatter___weight, frontmatter___date], order: [DESC, DESC] }
      ) {
        nodes {
          frontmatter {
            title
            authors
            weight
            date(formatString: "YYYY/MM/DD")
            publication
            image
            url_pdf
            url_code
            url_bibtex
          }
          id
        }
      }
    }
  `)

  return data.allMdx.nodes
}