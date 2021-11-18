const {
    getAllTodos,
    getComplete,
    getNotComplet,
    createNewTodo,
    updateTodo,
    updateisComplete,
    deletAllList,
    deletComplete


} = require('../controller/todo');

const getAlltodosMiddleware = (req, res, next) => {
    console.log("get All todos");
    next();
  };

  const todoRoute = express();

  todoRoute.get("/" , getAlltodosMiddleware ,getAllTodos);
  todoRoute.get("/todoComplete" , getComplete);
  todoRoute.get("/todoNotComplete" , getNotComplet);
  todoRoute.post("/create" , createNewTodo);
  todoRoute.put("/edit/:id" , updateTodo);
  todoRoute.put("/isComplete" , updateisComplete);
  todoRoute.delete("/delete" , deletAllList);
  todoRoute.delete("/delComp" , deletComplete)



  module.exports = todoRoute;