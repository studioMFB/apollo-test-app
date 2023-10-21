import path from "path";
import csv from "csvtojson";
// import someDatabaseClient from './';


const ERROR_MSG_DIR_UNDEFINED = "The directory path is undefined!";
const ERROR_MSG_FILE_UNDEFINED = "The filename is undefined!";
const ERROR_MSG_CONVERT = "Failed while trying to convert the csv into a json!";
const ERROR_MSG_DB_CONNECT = "Failed to connect to the database!";
const ERROR_MSG_DATA_SOURCE = "Invalid data source!";

export namespace DataHelper {

  export async function genericDataGetter(type: string, params: Record<string, any>) {
    const dataSource: string | undefined = process.env.DATA_SOURCE?.toLowerCase();

    switch (dataSource) {
      case "csv":
        return getDataFromCsv(type);
      case "database":
        return getDataFromDatabase(type, params);
      default:
        throw new Error(ERROR_MSG_DATA_SOURCE);
    }
  }

  async function getDataFromCsv(filename: string): Promise<string> {
    const useCsv: string | undefined = process.env.USE_CSV;
    const dirPath: string | undefined = process.env.CSV_DIR_PATH;

    console.log("process.env.USE_CSV ", useCsv);
    console.log("process.env.CSV_DIR_PATH ", dirPath);
    console.log("filename ", filename);

    try {
      if (dirPath !== undefined) {
        throw new Error(ERROR_MSG_DIR_UNDEFINED);
      }
      if (filename !== undefined) {
        throw new Error(ERROR_MSG_FILE_UNDEFINED);
      }
      // Parse CSV to return data as Json
      const filePath = `${dirPath}/${filename}.csv`;
      // const filePath = path.join(__dirname, filename);
      console.log("filePath ", filePath);

      const jsonData = await csv().fromFile(filePath);
      console.log("jsonData ", jsonData);

      return JSON.stringify(jsonData);
    }
    catch {
      throw new Error(ERROR_MSG_CONVERT);
    }
  }

  // This is a stub for fetching data from your database.
  // Replace this with your actual database query logic.
  async function getDataFromDatabase(query: any, params: any) {
    // This is a stub: a real function would interact with your database and return the query results
    // For example:
    // const data = await db.query(query, params);
    // return data;

    throw new Error(ERROR_MSG_DB_CONNECT);
  }

}