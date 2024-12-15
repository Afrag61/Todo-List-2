import { useContext } from "react"
import { TodoArrayContext } from "../store/TodoArrayContextProvider"

const Todo = ({todo, isChecked, valueIndex}) => {
    const {handleDelete, handleCheck} = useContext(TodoArrayContext)

    const classes = {
        div: 'h-28 flex flex-row justify-between items-center rounded-lg my-4 border-2',
        check: 'flex w-12 h-8',
        text: 'font-semibold font-mono text-lg',
        button: 'h-full w-[46px] text-sm font-semibold font-mono hover:text-red-700 mr-1'
    }

    const handleBtnDelete = () => {
        handleDelete(valueIndex)
    }

    const handleBtnCheck = (value) => {
        handleCheck(valueIndex)
    }

    {isChecked ? classes.div += ' border-green-500' : classes.div +=' border-slate-500'}
    {isChecked ? classes.text += ' text-green-500  line-through' : classes.text +=' text-slate-700'}
    {isChecked ? classes.button += ' text-green-500' : classes.button +=' text-slate-700'}

    return(
        <div className={classes.div}>
            <input onChange={(e) => handleBtnCheck(e.target.checked)} className={classes.check} type="checkbox" />
            <p className={classes.text}>{todo}</p>
            <button className={classes.button} onClick={handleBtnDelete}>Delete</button>
        </div>
    )
}

export default Todo;