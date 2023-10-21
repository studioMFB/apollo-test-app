import { DataHelper } from "@/utils/util.dataHelper";
import { CustomerQuery } from "./queries/query.customer";
import { ProductQuery } from "./queries/query.product";


const ERROR_MSG_RESOLVER = "Failed to create a new resolver!";

export const resolvers = {
    Query: {
        ...CustomerQuery,
        ...ProductQuery,

        // Using the higher-order function to create resolvers
        customer: createResolver('Customer'),
        product: createResolver('Product'),
    }
};

function createResolver(type: string) {
    return async (obj: any, args: Record<string, any>, context: any, info: any) => {

        const params = {
            ...args, // arguments passed to the database query.
        };

        try {
            const data = await DataHelper.genericDataGetter(type, params);

            if (!data) {
                throw new Error(`${type} not found!`);
            }

            return data;

        } catch (error) {
            throw new Error(ERROR_MSG_RESOLVER);
        }
    };
}
