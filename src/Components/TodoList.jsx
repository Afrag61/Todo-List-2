import { useContext } from "react";
import { TodoArrayContext } from "../store/TodoArrayContextProvider";

import Todo from "./Todo";

const TodoList = () => {
    const {todoArray} = useContext(TodoArrayContext)

    return(
        <div className='w-1/2 h-full bg-gray-100 border-2 ml-2 rounded-md border-slate-500 mt-4'>
        <h2 className='text-4xl font-semibold font-mono text-center text-slate-700 mx-2 mt-2 pb-2 border-slate-500'>Todo List</h2>
        <ul className="h-fit min-h-12 rounded-md border-slate-500 border-y-2 p-1 my-2 mx-2 rounded-t-none rounded-b-none content-center">
          {todoArray.length > 0 ? todoArray.map((item, index) =>
             <li key={index}>
              <Todo todo={item.todo} valueIndex={index} isChecked={item.isChecked} />
             </li>
             ) : <p className='font-semibold text-center font-mono text-2xl text-slate-700'>Empty</p>}
        </ul>
      </div>
    )
}

export default TodoList;