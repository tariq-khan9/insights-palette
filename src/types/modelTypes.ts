// Define the types for the GraphQL response
export interface Author {
    authorBio: string;
    authorName: string;
    id: string;
    authorImage: {
        url: string;
    };
    createdAt: string;
}

export interface Category {
    categoryName: string;
    categorySlug: string;
}

export interface PostNode {
    author: Author;
    postSlug: string;
    postTitle: string;
    postExcerpt: string;
    featuredImage: {
        url: string;
    };
    category: Category;
}

export interface PostEdge {
    node: PostNode;
}

export interface PostsConnection {
    edges: PostEdge[];
}

export interface GraphQLResponse {
    postsConnection: PostsConnection;
}
