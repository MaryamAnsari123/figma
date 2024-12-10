import { MenuIcon, Search } from "lucide-react"
import Dropdown from "./DropDown"

const MobileHeader = () => {
    return (
        <div className="justify-items-center">
      <div className="flex justify-center gap-44 md:gap-80 items-center w-[390px] h-[69px]">

            <div>
            <h1 className='text-lg font-semibold'>
            Avion
            </h1>
            </div>

            <div className='flex justify-center items-center gap-2'>
            <Dropdown />
              <Search className='w-[16px] h-[16px]' />
           
            </div>

      </div>
      </div>
    )
  }
  
  export default MobileHeader