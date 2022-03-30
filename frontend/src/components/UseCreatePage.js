import { IconButton } from '@mui/material'
import {AiOutlineCloudUpload,AiFillDelete} from 'react-icons/ai'
import { DashboardNavbar, DashboardSidebar } from '../components'


 
export const UseCreatePage = ({title,onFileChange,children,image,clearImage,onSubmit,buttonTitle}) => {
  
  return (
    <>
    <div className='flex'>
        <DashboardSidebar/>
        <div className='flex-[6]'>
            <DashboardNavbar/>
            
            <div className='flex flex-col lg:flex-row gap-2  px-2 py-2 mt-2' style={{minHeight:'calc(100vh + (-100px))'}}>
              <div className='flex-1   w-full p-3 shadow-md min-h-[80vh] max-h-[100vh]'   >
                  <div className='border-dashed border-2 flex justify-center items-center w-full h-full min-h-[80vh]  rounded-md border-slate-400 p-2'  >
                    <div className='flex relative justify-center w-full h-full px-2 flex-col items-center min-h-[80vh] bg-gray-200 rounded-md'  >
                        {!image ? <>
                          <IconButton>
                            <AiOutlineCloudUpload
                            className='font-extrabold text-6xl text-purple'
                            />
                          </IconButton>
                           
                          <label htmlFor="uploadImage"  className='text-violet text-lg font-bold mb-4 cursor-pointer'>Click here to upload</label>
                          <input
                          required
                          id="uploadImage"
                          type="file"
                          name="image"
                          onChange={onFileChange}
                          className="hidden"
                          />
                          
                           <p className='text-sm font-bold text-red-500'>Use high quality JPG,SVG,PNG,GIF</p>
                        </>:
                        <>
                        <img src={image} alt="uploaded image" className='w-full h-full'/>
                         
                          <AiFillDelete onClick={clearImage} className='bg-white text-3xl cursor-pointer hover:text-white hover:bg-red-500 transition-all duration-500 mr-3 text-red-500 rounded-full z-2 absolute bottom-0 right-0'/>
                          
                         
                        </>}
                    </div>
                          
                  </div>
              </div>
              <div className='flex-[2] bg-indigo-100  shadow-md'>
              <p className='text-[#1a6372] text-4xl italic font-extrabold text-center italic my-3 underline'>{title}</p>
                  
                  <form className='px-3 py-2 text-center' onSubmit={onSubmit}>
                    {children}
                    <button
                    type='submit'
                    className='text-xl cursor-pointer p-2 text-white rounded-md hover:bg-green-700 hover:font-bold transition-all duration-400 w-32 bg-green-900'
                    >{buttonTitle}</button>
                  </form>
              </div>
            </div>
        </div>
    </div>
    </>

   )
}

 