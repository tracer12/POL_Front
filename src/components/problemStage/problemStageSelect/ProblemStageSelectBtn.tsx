"use client"

import React from "react";
import Image from 'next/image'

interface problemStageSelectBtnType {
    value:string,
    setUlToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const ProblemStageSelect:React.FC<problemStageSelectBtnType> = ({value,setUlToggle}) => {
    return (
        <button onClick={()=>{setUlToggle(preOpen=>!preOpen)}} className="bg-gray-0 min-w-min h-9 mr-4 flex items-center justify-between px-3 border-solid border rounded-md border-gray-600 text-gray-900">
            {value}
            <Image 
                src={"./problemStage/problemSelect.svg"} 
                alt="down"
                width={16}
                height={16}
                className="flex-shrink-0 ml-1.5"
            />
        </button>
    )
}

export default ProblemStageSelect
