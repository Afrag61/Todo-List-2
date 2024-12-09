const Todo = ({todo, isChecked, valueIndex, onDelete}) => {
    const classes = {
        div: 'h-28 flex flex-row justify-between items-center rounded-lg my-4 border-2 border-slate-500',
        check: 'flex w-12 h-8',
        text: 'font-semibold font-mono text-lg text-slate-700',
        button: 'h-full w-[46px] text-sm font-semibold font-mono text-slate-700 hover:text-red-700 mr-1'
    }

    const handleBtnDelete = () => {
        onDelete(valueIndex)
    }

    return(
        <div className={classes.div}>
            <input className={classes.check} type="checkbox" />
            <p className={classes.text}>{todo}</p>
            <button className={classes.button} onClick={handleBtnDelete}>Delete</button>
        </div>
    )
}

export default Todo;