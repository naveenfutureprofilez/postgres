import {Client} from "pg";
const db = new Client('postgresql://neondb_owner:npg_K2AkPDbg1ucT@ep-raspy-union-a1ahum1r-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
async function main(){
   await db.connect();
   const response = await db.query('SELECT * FROM users');
   const result = response.rows? "POSTGRES Connected -------------------------" : '';
   console.log(result);
}
main();


import express from "express";
const app = express();
app.get("/add/task", (req, res) => {
   // const {title, description, status} = req.body;
   const title = 'Go to Gym';
   const description = 'I have to go to gym 2 times';
    db.query('INSERT INTO todos (title, description, status) VALUES ($1, $2, $3)', [title, description, false]);
});

app.get("/task", async (req, res) => {
    try {
        const list =await db.query('SELECT * FROM todos');
        if(list.rows && list.rows.length){
            res.send({
                status:true,
                tasks: list.rows
            })
        } else {
            res.send({
                status:false,
                tasks: list?.rows
            });
        }
    } catch (err){
        console.log("err",err)
        res.send({
            status:false,
            err: err
        });
    }
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});