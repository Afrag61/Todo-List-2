import { createContext } from "react";
import { useState } from "react";

export const TodoArrayContext = createContext({
    todoArray: [],
    setTodoArray:() => {},
    handleSave: () => {},
    handleChange: () => {},
    handleClear: () => {},
    handleCheck: () => {},
    handleDelete: () => {},
    isInvalid: false,
    inputValue: ''
})

const TodoArrayContextProvider = ({children}) => {
    const [todoArray, setTodoArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(false)

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

    const handleClear = () => {
        setInputValue('')
        // setIsInvalid(false)
    }
    
    const handleChange = (value) => {
        setInputValue(value)
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
        <TodoArrayContext.Provider value={{todoArray, handleSave, handleChange, handleClear, handleCheck, handleDelete, isInvalid, setTodoArray, inputValue}}>
            {children}
        </TodoArrayContext.Provider>
    )
}

export default TodoArrayContextProvider;