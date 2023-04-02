type Props = {
    placeholder: string;
}
const SearchInput = (props: Props) => {

    return (
        <div className="w-72 h-fit">
            <label className="relative text-gray-400 focus-within:text-gray-600 block">
                {/* add search icon */}
                <input 
                    type="text" 
                    placeholder={props.placeholder}
                    className='h-9 rounded-md border-none text-slate-400 
                        px-2 focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                    style={{backgroundColor:'#A6DBFF'}}
                />
            </label>        
        </div>
    )
}

export default SearchInput; 