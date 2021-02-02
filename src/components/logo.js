import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Logo = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    if (!data?.placeholderImage?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }
  
    return <Img className="logoimage" fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default Logo