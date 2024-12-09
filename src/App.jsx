import { useState } from "react";

import Input from "./Components/Input";
import Todo from "./Components/Todo";

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false)
  
  const handleClear = () => {
    setTextValue('')
  }

  const handleChange = (value) => {
    setTextValue(value)
  }

  const handleSave = () => {
    if(textValue.trim() === ''){
      setIsInvalid(true)
      setTimeout(() => setIsInvalid(false), 3000)
    }else{
      setIsInvalid(false)
      setTodoArray(prev => [...prev, {
        todo: textValue,
        isChecked: false
        }])
      handleClear();
    }
  }

  const handleCheck = (valueIndex) => {
    setTodoArray(prev => prev.map((item,index) => index === valueIndex ? {
      ...item,
      isChecked: !item.isChecked
    } : item
  ))
  }

  const handleDelete = (valueIndex) => {
    setTodoArray(prev => prev.filter((todo, index) => index !== valueIndex))
  }

  return(
    <div className='flex w-full h-full bg-gray-100'>
      <div className='w-1/2 h-full bg-gray-100 border-2 ml-2 rounded-md border-slate-500 mt-4'>
        <h2 className='text-4xl font-semibold font-mono text-center text-slate-700 mx-2 mt-2 pb-2 border-slate-500'>Todo List</h2>
        <ul className="h-fit min-h-12 rounded-md border-slate-500 border-y-2 p-1 my-2 mx-2 rounded-t-none rounded-b-none content-center">
          {todoArray.length > 0 ? todoArray.map((item, index) =>
             <li key={index}>
              <Todo todo={item.todo} valueIndex={index} isChecked={item.isChecked} onDelete={handleDelete} onCheck={() => handleCheck(index)}/>
             </li>
             ) : <p className='font-semibold text-center font-mono text-2xl text-slate-700'>Empty</p>}
        </ul>
      </div>
      <Input onChange={handleChange} value={textValue} onClear={handleClear} onSave={handleSave} invalid={isInvalid} />
    </div>
  )
}

export default App;