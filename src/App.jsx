import Input from "./Components/Input";
import TodoList from "./Components/TodoList";
import TodoArrayContextProvider from './store/TodoArrayContextProvider'

const App = () => {
  return(
    <TodoArrayContextProvider>
      <div className='flex w-full h-full bg-gray-100'>
        <TodoList/>
        <Input/>
      </div>
    </TodoArrayContextProvider>
  )
}

export default App;