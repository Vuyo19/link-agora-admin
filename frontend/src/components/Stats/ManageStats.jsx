import React from 'react'
import { FaArrowRight } from "react-icons/fa";


    const ManageStats = ({
        title,
        value,
        icon,
        backColor,
      }) => {
  return (

    <div class="group relative  w-80 h-44">
        <div class="grid  lg:grid-cols-4">
            <div class="p-5 bg-white w-72 h-32 rounded-lg shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50" style={{ background: backColor}}>
                        {icon}
                        </div>
                    </div>
                    <div>
                        <div class="text-5xl font-bold text-gray-900">{title}</div>
                        <div class="text-gray-400">{value}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default ManageStats