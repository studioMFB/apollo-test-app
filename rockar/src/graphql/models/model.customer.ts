import { DataHelper } from "@/utils/util.dataHelper";
import { CustomerType } from "../types/type.customer";

export interface ICustomer {
    email: string,
    forename: string,
    surname: String,
    contactNumber: number,
    postcode: string
}

class CustomerModel {
    private dataSource: any;
  
    constructor(dataSource: any) {
      this.dataSource = dataSource;
    }
   
    // Method to find customers based on any field.
    async find(filter: Partial<ICustomer>): Promise<ICustomer[]> {
      // Logic to get customers based on a filter from the data source
      const customers = await DataHelper.getDataBasedOnFilter('customers', filter);
      
      return customers;
    }
  
  }

function genericDataGetter(arg0: string, filter: Partial<ICustomer>) {
    throw new Error("Function not implemented.");
}
