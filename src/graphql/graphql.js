import {request, gql} from 'graphql-request';


const hygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL

export const getAllPosts = async () => {
    const query = gql`
        query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                authorBio
                authorName
                id
                authorImage {
                  url
                }
                createdAt
              }
              postSlug
              postTitle
              postExcerpt
              createdAt
              featuredImage {
                url
              }
              category {
                categoryName
                categorySlug
              }
            }
          }
        }
      }
   ` 
   

  

   const results = await request(hygraphUrl, query);
   return results.postsConnection.edges;
   
}

export const getCategoryPosts = async (category) => {
  const query = gql`
    query GetSimilarPosts($category: String!) {
      postsConnection(
        where: {
          category_some: { categorySlug: $category }
        }
      ) {
        edges {
          node {
              author {
                authorBio
                authorName
                id
                authorImage {
                  url
                }
                createdAt
              }
              postSlug
              postTitle
              postExcerpt
              createdAt
              featuredImage {
                url
              }
              category {
                categoryName
                categorySlug
              }
            }
        }
      }
    }
  `;

  // Make the request, passing the variables dynamically
  const result = await request(hygraphUrl, query, {
    category
  });

  return result.postsConnection.edges;
};

export const getRecentPosts = async() => {
  const query = gql`
 query MyQuery {
  postsConnection(orderBy: createdAt_ASC, last: 4) {
    edges {
      node {
        postTitle
        postSlug
        createdAt
        postExcerpt
        featuredImage {
          url
        }
      }
    }
  }
}
  `
  const results = await request(hygraphUrl, query);
   return results.postsConnection.edges;
} 

export const getSimilarPosts = async (category, postSlug) => {
  const query = gql`
    query GetSimilarPosts($category: String!, $postSlug: String!) {
      postsConnection(
        where: {
          category_some: { categorySlug: $category }
          postSlug_not: $postSlug
        }
        last: 3
      ) {
        edges {
          node {
            createdAt
            featuredImage {
              url
            }
            postExcerpt
            postSlug
            postTitle
          }
        }
      }
    }
  `;

  // Make the request, passing the variables dynamically
  const result = await request(hygraphUrl, query, {
    category,
    postSlug
  });

  return result.postsConnection.edges;
};

export const getAuthorPosts = async ( slug ) => {
  const query = gql`
    query GetAuthorPosts($slug: String!) {
      postsConnection(where: { author: { authorSlug: $slug} }) {
        edges {
          node {
            author {
                authorBio
                authorName
                id
                authorImage {
                  url
                }
                createdAt
              }
            createdAt
            featuredImage {
              url
            }
            postExcerpt
            postSlug
            postTitle
          }
        }
      }
    }
  `;

  // Pass the dynamic authorId as a variable in the request
  const results = await request(hygraphUrl, query, { slug});
  return results.postsConnection.edges;
};

export const getAuthorPostsList = async ( authorSlug, postSlug ) => {
  const query = gql`
  query GetAuthorPosts($authorSlug: String!, $postSlug: String!) {
    postsConnection(where: { author: { authorSlug: $authorSlug } postSlug_not: $postSlug }) {
      edges {
        node {
          postExcerpt
          postSlug
          postTitle
          featuredImage{
            url
          }
        }
      }
    }
  }
`;

  // Pass the dynamic authorId as a variable in the request
  const results = await request(hygraphUrl, query, {authorSlug, postSlug});
  return results.postsConnection.edges;
};

// export const getSimilarPosts = async(categories, slug) => {
//   const query = gql`
//         query GetPostDetails($slug: String!, $categories: [String!]){
//           posts(
//     where: {category_some: {categorySlug: $categories}, postSlug_not: $slug}
//     last: 4
//   )
//           {
//             postExcerpt
//             postSlug
//             postTitle
//             createdAt
//             featuredImage {
//               url
//             }
//           }
//         }
//   `
//  const results = await request(hygraphUrl, query, {categories, slug});
//    return results.posts;
// } 

// export const getSimilarPosts = async(categories, slug) => {
//   const query = gql`
//      query MyQuery {
//   postsConnection(
//     where: {category_some: {categorySlug: categories}, postSlug_not: slug}
//     last: 4
//   ) {
//     edges {
//       node {
//         createdAt
//         featuredImage {
//           url
//         }
//         postExcerpt
//         postSlug
//         postTitle
//       }
//     }
//   }
// }
//   `
//  const results = await request(hygraphUrl, query, {categories, slug});
//    return results.postsConnection.edges;
// } 

export const getCategories = async() => {
  const query = gql`
      query MyQuery {
        categoriesConnection(orderBy: categoryName_ASC) {
          edges {
            node {
              categoryName
              categorySlug
              categoryDescription
              id
            }
          }
        }
      }
  `
  const results = await request(hygraphUrl, query);
   return results.categoriesConnection.edges;
} 

export const getAuthors = async() => {
  const query = gql`
          query MyQuery {
            authorsConnection {
              edges {
                node {
                  authorImage {
                    url
                  }
                  authorName
                  authorSlug
                }
              }
            }
          }
  `
  const results = await request(hygraphUrl, query);
   return results.authorsConnection.edges;
} 

// export const getPost = async ({slug}) => {
//   const query = gql`
//    query MyQuery {
//   post(where: {postSlug: "webdeveasy"}){
//       author {
//       authorName
//       id
//       createdAt
//       authorImage {
//         url
//       }
//       authorBio
//     }
//     postSlug
//     postExcerpt
//     postTitle
//     createdAt
//     featuredImage {
//       url
//     }
//     postContent {
//       raw
//     }
//     category {
//       categoryName
//       categorySlug
//     }
//   }
//   }
//  ` 
 
//  const results = await request(hygraphUrl, query, {slug});
//  return results.post;
 
// }

export const getPost = async (postSlug) => {
  const query = gql`
    query GetPostBySlug($postSlug: String!) {
      post(where: { postSlug: $postSlug }) {
        author {
          authorBio
          authorImage {
            url
          }
          authorName
          id
          createdAt
          authorSlug
        }
        postExcerpt
        postSlug
        postTitle
        createdAt
        featuredImage {
          url
        }
        postContent {
          raw
        }
        category {
          categoryName
          categorySlug
        }
      }
    }
  `;

  

  // Pass the dynamic postSlug as a variable in the request
  const results = await request(hygraphUrl, query, {postSlug});
  return results.post;
};

export const submitComment = async(commentObj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(commentObj)
  })

  return result
}