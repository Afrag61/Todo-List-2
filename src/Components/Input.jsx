const Input = () => {

    const classes = {
        firstDiv: 'w-1/2 h-screen flex-col place-items-center content-center bg-gray-100',
        input: 'w-96 h-28 font-semibold text-slate-950 bg-slate-300 border-b-2 rounded-sm border-slate-500 focus:border-slate-700 focus:outline-none placeholder:text-center px-1 py-1',
        secondDiv: 'flex gap-28 mt-4',
        btnClear: 'w-[5rem] h-[2rem] border-2 border-slate-500 rounded-md text-slate-950 hover:bg-red-800 hover:border-0 hover hover:text-slate-200',
        btnSave: 'w-[5rem] h-[2rem] border-2 border-slate-500 rounded-md text-slate-950 hover:bg-green-800 hover:border-0 hover hover:text-slate-200'
    }

    return(
        <div className={classes.firstDiv}>
            <textarea type="text" className={classes.input} placeholder="type Todo Here" />
            <div className={classes.secondDiv}>
                <button className={classes.btnClear}>Clear</button>
                <button className={classes.btnSave}>Save</button>
            </div>
        </div>
    )
}

export default Input;