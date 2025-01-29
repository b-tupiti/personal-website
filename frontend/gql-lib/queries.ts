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
    query Posts {
        pages {
            ... on BlogPage {
                id
                title
                slug
            }
        }
    }
    `
}

export { getPostBySlugGQL, getLatestPostsGQL };