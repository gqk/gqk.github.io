import { graphql, useStaticQuery } from "gatsby"

export const useImage = (relativePath) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return data.allFile.nodes.find(node => node.relativePath === relativePath)?.childImageSharp
}