import { useState } from "react"

export const FormInput=(initialState)=>{
    const [formData, setformData] = useState(initialState)
    const [showPassword, setshowPassword] = useState(false)

    const onChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }

    return{
        showPassword,
        setshowPassword,
        formData,
        setformData,
        onChange
    }

}

export const ImageChange=()=>{
   
    const [image, setimage] = useState("")
   const [imagePreview,setimagePreview]=useState("")

    const onFileChange=(e)=>{
        const reader=new FileReader();
    
        reader.onload=()=>{
            if(reader.readyState===2){
                setimage(reader.result);
                setimagePreview(reader.result);
            }
        }
    
        reader.readAsDataURL(e.target.files[0]);
    }

    const clearImage=()=>{
        console.log("hi")
        setimage("")
    }
    return{
        onFileChange,
        image,
        clearImage
    }

}

export const Input=({onChange,value,name,placeholder,type})=>{
    return(
        <input
        required
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className='border border-slate-400 text-xl w-full rounded-md focus:outline-none focus:ring-1 focus:ring-purple focus:border-purple px-2 py-2 h-10 mb-5'
        />
    )
}

export const TextArea=({name,value,onChange,placeholder,rows,cols})=>{
    return (
        <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        required
        className='w-full rounded-md focus:outline-none border border-slate-400 focus:border-purple focus:ring-1 focus:ring-purple py-1 px-1 mb-5'
        />
    )
}

export const Select=({name,defValue,onChange,array,value})=>{
    return(
    <select
    value={value}
    onChange={onChange}
    name={name}
    className='w-full rounded-md focus:outline-none text-xl border border-slate-400 focus:border-purple focus:ring-1 focus:ring-purple py-1 px-1 mb-5'
    >
        <option disabled>{defValue}</option>
        {array?.map((item)=>(
            <option
            className="text-lg italic mb-1"
            value={item?.name}
            >
            {item?.name}
            </option>
        ))}
    </select>
    )
}

export const UseForm=(props)=>{
    return(
        <div>
        <div  className={`bg-bg4 bg-local bg-contain bg-cover h-full  `} >
            <div  className='nunito w-3/4 md:w-3/6 bg-white m-auto  rounded-md shadow-lg py-9 p-5'>
            <h1  className='text-center font-extrabold text-6xl text-turquoiseBlue'>ECom</h1>
            <hr className='divide-y-4 w-1/5 m-auto'/>
            <p className='text-center my-3 italic text-lg text-violet font-bold'>{props.title}</p>

            <form   className='w-3/4 m-auto text-center py-9 h-full' >
                {props.children}
                <button 
                className="w-full bg-purple-500 text-lg my-4 text-white px-6 py-3 hover:text-purple-500 hover:bg-slate-100 transition-all hover:font-bold duration-300"
                type='submit'
                >
                    {props.button}
                </button>
            </form>
            </div>
        </div>
        </div>
    )
}