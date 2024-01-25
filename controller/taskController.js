const Task = require ("../models/task");

const createTask = async (req ,res) =>{
   const result = await Task.create(req.body);
   res.status(200).json(result);
};

const getTasks =async(req,res)=>{
    const tasks = await Task.find();
    res.status(200).json(tasks);

}
const getTaskById = async(req,res)=>{
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);

}
const updateTask= async(req,res)=>{
    const result =await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(result);
}
const deleteTask = async (req,res)=> {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task){
        return res.status(404).json({msg:"No task with this id"})
        }
        res.status(200).json(task);
        };




module.exports={createTask,getTasks,getTaskById,updateTask,deleteTask};