import { useState } from "react";

import Input from "./Components/Input";
import TodoList from "./Components/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false)
  
  const handleClear = () => {
    setInputValue('')
    // setIsInvalid(false)
  }

  const handleChange = (value) => {
    setInputValue(value)
  }

  const handleSave = () => {
    if(inputValue.trim() === ''){
      setIsInvalid(true)
    }else{
      setIsInvalid(false)
      setTodoArray(prev => [...prev, {
        todo: inputValue,
        isChecked: false
        }])
      handleClear();
    }
  }

  

  return(
    <div className='flex w-full h-full bg-gray-100'>
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray} />
      <Input onChange={handleChange} value={inputValue} onClear={handleClear} onSave={handleSave} invalid={isInvalid} />
    </div>
  )
}

export default App;