const http = require("http");
const dotenv = require ("dotenv");
const express=require("express")
const mongoose =require("mongoose")

const taskControllers = require ("./controller/taskController")

dotenv.config();

/*const server = http. createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world");

});

server .listen(process.env.PORT,() =>{
    console.log("Server is running at port ",process.env.PORT);
})*/

const app = express();
app.use(express.json())

app.post ("/tasks",taskControllers.createTask);
app.get ("/tasks",taskControllers.getTasks);
app.get(  "/tasks/:id",taskControllers.getTaskById  );
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.deleteTask);

app.get("/:id ",(req,res)=>{
    res.status(200).json({
        message:"Welcome to our API",
        id:req.params.id
    });
})

app.post("/",(req,res)=>{
    res.status(200).json(req.body);
});

mongoose.connect("mongodb+srv://AnilaCBiju:anila123@cluster0.sfhsiji.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("db connected")
}).catch((err)=>{
    console.error(err);
});

app.listen(process.env.PORT, () =>{
    console.log("Server running on ", process.env.port);
})