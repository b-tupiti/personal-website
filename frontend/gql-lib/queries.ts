function getPostBySlugGQL(slug: string){
    return `
        query BlogPost {
      page(slug: "${slug}") {
          ... on BlogPage {
              body {
                  id
                  field
                  rawValue
                  ... on ImageChooserBlock {
                      id
                      field
                      image {
                          file
                          url
                      }
                  }
              }
              title
              slug
              date
              owner
          }
      }
  }`
}



function getLatestPostsGQL(){
    return `
  query GetLatestBlogs {
    pages(contentType: "Blog.BlogPage") {
        __typename
        ... on BlogPage {
            id
            title
            date
            url
            slug
        }
    }
}
    `
}

export { getPostBySlugGQL, getLatestPostsGQL };