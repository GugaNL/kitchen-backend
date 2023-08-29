const { gql } = require('apollo-server-core')


const imageTypedefs = gql`
  extend type Query {
    image(id: ID!): Image!
    images(input: ApiFiltersInput): [Image!]!
  }

  type Query {
    uploads: [Image]
  }

  type Mutation {
    singleUpload(file: ImageInput!): Image!
  }

  type Image {
    id: ID!
    filename: String!
    path: String!
    mimetype: String!
  }

  input ImageInput {
    filename: String!
    path: String!
    mimetype: String!
  }
`;

module.exports = {
  imageTypedefs
}
