import { CustomerQuery } from "./queries/query.customer";
import { ProductQuery } from "./queries/query.product";


export const resolvers = {
    Query: {
        ...CustomerQuery,
        ...ProductQuery,
    }
};