import csv from "csvtojson";
import { ICustomer } from "../models/model.customer";


export const CustomerQuery = {
  getAllCustomers: async () => {
  try{
  
    }
    catch (error) {
      throw new Error("Something went wrong")
    }
  },

  getCustomer: (root:any, args:ICustomer) => { 
  },
};
