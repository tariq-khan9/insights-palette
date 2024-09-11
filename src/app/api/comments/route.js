import { GraphQLClient, gql } from 'graphql';



const hygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL;


export async function POST(req) {
  const { name, email, comment, slug } = req.body;

  const GraphClient = new GraphQLClient(hygraphUrl, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(
        data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }
      ) {
        id
      }
    }
  `;

  try {
    const result = await GraphClient.request(query, req.body);
    console.log("graph response", result)
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
