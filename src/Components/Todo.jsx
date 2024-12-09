const Todo = ({todo, isChecked, valueIndex, onDelete, onCheck}) => {
    const classes = {
        div: 'h-28 flex flex-row justify-between items-center rounded-lg my-4 border-2',
        check: 'flex w-12 h-8',
        text: 'font-semibold font-mono text-lg',
        button: 'h-full w-[46px] text-sm font-semibold font-mono hover:text-red-700 mr-1'
    }

    const handleBtnDelete = () => {
        onDelete(valueIndex)
    }

    {isChecked ? classes.div += ' border-green-500' : classes.div +=' border-slate-500'}
    {isChecked ? classes.text += ' text-green-500' : classes.text +=' text-slate-700'}
    {isChecked ? classes.button += ' text-green-500' : classes.button +=' text-slate-700'}

    return(
        <div className={classes.div}>
            <input onChange={(e) => onCheck(e.target.checked)} className={classes.check} type="checkbox" />
            <p className={classes.text}>{todo}</p>
            <button className={classes.button} onClick={handleBtnDelete}>Delete</button>
        </div>
    )
}

export default Todo;