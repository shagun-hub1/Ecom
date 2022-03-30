import { Watch } from "react-loader-spinner"

const Loader = ({title}) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
        <Watch ariaLabel="loading-indicator" />
        <p className='text-xl text-purple'>{title}</p>
    </div>
  )
}

export default Loader