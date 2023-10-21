import { gql } from "apollo-server-micro";
import { CustomerType } from "./types/type.customer";
import { ProductType } from "./types/type.product";


export const typeDefs = gql`
     type Query
     ${CustomerType}
     ${ProductType}
`;