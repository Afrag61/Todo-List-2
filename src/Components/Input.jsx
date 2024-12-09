const Input = ({onSave, onClear, onChange, value, invalid}) => {
    


    const classes = {
        firstDiv: 'w-1/2 h-screen flex-col place-items-center content-center',
        input: 'w-96 h-28 font-semibold font-mono text-slate-700 border-b-2 rounded-md rounded-b-none focus:border-slate-700 focus:outline-none placeholder:text-center px-1 py-1 shadow-md',
        secondDiv: 'flex gap-28 mt-4',
        btnClear: 'w-[5rem] h-[2rem] font-semibold font-mono border-2 border-slate-500 rounded-md text-slate-700 hover:bg-red-800 hover:border-0 hover hover:text-slate-200 hover:shadow-md',
        btnSave: 'w-[5rem] h-[2rem] font-semibold font-mono border-2 border-slate-500 rounded-md text-slate-700 hover:bg-green-800 hover:border-0 hover hover:text-slate-200 hover:shadow-md',
        textInvalid: 'font-semibold font-mono text-red-600 mb-1'
    }

    {!invalid ? classes.input += ' border-slate-400 bg-slate-200': classes.input +=' border-red-600 bg-red-200' }

    return(
        <div className={classes.firstDiv}>
            {invalid && <p className={classes.textInvalid}>*Please Enter Valid Text*</p> }
            <textarea onChange={(e) => onChange(e.target.value)} value={value} type="text" className={classes.input} placeholder="type Todo Here" />
            <div className={classes.secondDiv}>
                <button className={classes.btnClear} onClick={onClear}>Clear</button>
                <button className={classes.btnSave} onClick={onSave}>Save</button>
            </div>
        </div>
    )
}

export default Input;