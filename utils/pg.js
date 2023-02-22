import { Client } from "pg";

const pg = new Client({
    connectionString: process.env.DB_CONNECTION_STRING
});

pg.connect()


export default{
    ...pg,
    execute: async (query, ...args)=> {
        const response = await pg.query(query, ...args);
        console.log(response)
        const rows = response.rows;
        return rows;

} 
}

