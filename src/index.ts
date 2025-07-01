import {Client} from "pg";

const db = new Client('postgresql://neondb_owner:npg_K2AkPDbg1ucT@ep-raspy-union-a1ahum1r-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function main(){
   await db.connect();
   const response = await db.query('SELECT * FROM users');
   console.log(response.rows);
}
main();