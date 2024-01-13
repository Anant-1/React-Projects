import React, {useContext} from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import { useNavigate } from 'react-router-dom'
import {categories} from '../utils/constants'
import {Context} from '../context/contextApi'

function LeftNav() {
  // console.log('LeftNav')
  const {selectedCategory, setSelectedCategory, mobileMenu} = useContext(Context)

  const clickHandler = (name, type)=>{

    if(type == 'category' || type == 'home'){      
      setSelectedCategory(name)
    }
  }

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all no-scrollbar hover:show-scrollbar ${mobileMenu ? "translate-x-1" : ""}`}>
      <div className="flex px-5 flex-col">
        {
          categories.map((item, index) => {
            return(
              <React.Fragment key={index}>
                <LeftNavMenuItem
                text={item.type === 'home' ? "Home" : item.name}
                icon={item.icon}
                action={()=>{
                  clickHandler(item.name, item.type)
                }}
                className={`${selectedCategory === item.name ? 'bg-white/[0.15]' : ''}`}
                />
                {item.divider && (
                  <hr className='my-5 border-white/[0.2]'/>
                )}
            </React.Fragment>)
        })}
        <hr className='my-5 border-white/[0.2]'/>
        <div className='my-5 border-white/[0.5] text-[12px] text-white'>
          Clone by: Anant Pawar
        </div>
      </div>
    </div>
    
  )
}

export default LeftNav