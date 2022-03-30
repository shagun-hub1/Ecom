import { Link } from "react-router-dom"

 

const WidgetLg = () => {
  const image="https://cdn.wallpapersafari.com/50/50/ZTcDPK.jpg"
  const transactions=[
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'shipped'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'pending'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'pending'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'delivered'},
    {name:'Natasha',avatar:image,date:'12/5/21',amount:"10000",status:'shipped'},
  ]

  const color=(status)=>{
      if(status==='delivered')
      return 'bg-green-600'

      else if(status==='shipped')
      return 'bg-green-400'

      else
      return 'bg-red-200 font-bold'
  }
  
  return (
    <div className='flex-[3] shadow-md px-3'>
        <p className='text-2xl  text-darkpurple font-extrabold'>Latest Order Details</p>
        <p className='text-right'><Link to='/admin/orders' className='text-slate-400 hover:text-violet hover:font-bold transition-all duration-500'>View All Orders</Link></p>
        <hr className='border-[0.5px] border-slate-400 mb-3' />
        <table className="table-auto w-full">
          <tr className='text-left text-lg'>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {transactions.map(transaction=>(
            <tr>
              <td className="">
                <div className='flex gap-2 items-center mb-3'>
                <img src={transaction.avatar} className='w-8 h-8 rounded-full' />
                <span>
                  {transaction.name}
                  </span>
                </div>
              </td>
              <td className='text-slate-400'>{transaction.date}</td>
              <td className='text-slate-400'>{transaction.amount}</td>
              <td>
                <div className={`${color(transaction.status)} rounded-2xl py-1 w-2/4 justify-center items-center flex text-teal-50`}>
                {transaction.status}
                </div>
              </td>
            </tr>
          ))}
        </table>
    </div>
  )
}

export default WidgetLg