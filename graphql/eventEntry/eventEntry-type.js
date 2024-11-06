// schema/eventType.js
const gql = require('graphql-tag');

const eventType = gql`
  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    location: String!
    category: String!
    contactDetails: String!
    createdAt: String!
    updatedAt: String!
  }

  input EventInput {
    title: String!
    description: String!
    date: String!
    location: String!
    category: String!
    contactDetails: String!
    user: ID!
  }

  type Query {
    event(id: ID!): Event
    events: [Event]
    searchEvents(title: String!): [Event]
  }

  type Mutation {
    createEvent(input: EventInput!): Event
    updateEvent(id: ID!, input: EventInput!): Event
    deleteEvent(id: ID!): Event
  }
`;

module.exports = eventType;
