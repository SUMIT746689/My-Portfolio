import { useRef } from "react"


function Practice() {
  

  return (
    <div className="flex h-screen w-screen justify-center justify-items-center relative top-10">
      <div >
        
        <button  onMouseOver={()=>refChange("invisible","visible")} onMouseOut={()=>refChange("visible","invisible")} data-tooltip-target="tooltip-no-arrow" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300">Default tooltip</button>
        <div ref={refer} className=" before:-scale-50 duration-700 transition-transform invisible bg-slate-400 text-white p-2 mt-4 text-center rounded-md">
          Tool tip
        </div>
      </div>
    </div>
    
  )
}

export default Practice