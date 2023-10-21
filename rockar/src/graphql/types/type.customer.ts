import { gql } from "apollo-server-express";
// import { EmailAddress, PhoneNumber, PostalCode } from 'graphql-scalars/typings/typeDefs';


export const CustomerType = gql`

  type Customer{
    email: String
    forename: String!
    surname: String!
    contactNumber: Int
    postcode: String
  }

  type Query {
    getAllCustomers: [Customer] 
    getCustomer(arg: String): Customer 
   }
`;
