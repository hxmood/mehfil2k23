"use client"

import { FaEdit } from "react-icons/fa"
import {AiFillDelete} from "react-icons/ai"

import Link from "next/link"
import { useRouter } from "next/navigation"

const ResultShow = ({datas, handleEdit, handleDelete}) => {
  const router = useRouter()

 

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-3">
      <div className="flex w-full justify-between">
        <h1 className="font-semibold text-lg">{datas.res}</h1>
        <h2 className="">{datas.category}</h2>
      </div>
      <hr className="mt-2 " />
      {/*--------------------------  */}
      <div className="flex flex-col">
        <div className="flex  mt-2 flex-1  px-2 items-center">
          <div className="flex basis-1/2">
            <h1 className="mr-2">1</h1>
            <h1>{datas.first.name}</h1>
          </div>

          <div className="flex basis-1/2 ">
            <div className="grid w-full grid-cols-3 place-items-end">
              <h2>{datas.first.grade}</h2>
              <h2>{datas.first.marks}</h2>
              <p className="text-gray-500">{datas.first.team}</p>
          
             

            </div>
          </div>
        </div>

        <div className="flex  mt-2 flex-1 px-2 items-center">
          <div className="flex basis-1/2">
            <h1 className="mr-2">2</h1>
            <h1>{datas.second.secName}</h1>
          </div>

          <div className="flex basis-1/2 ">
            <div className="grid w-full grid-cols-3 place-items-end">
              <h2>{datas.second.secGrade}</h2>
              <h2>{datas.second.secMarks}</h2>
              <p className="text-gray-500">
                {datas.second.secTeam}
              </p>
             
            </div>
          </div>
        </div>

        <div className="flex  mt-2 flex-1 px-2 items-center">
          <div className="flex basis-1/2">
            <h1 className="mr-2">3</h1>
            <h1>{datas.third.thrName}</h1>
          </div>

          <div className="flex basis-1/2 ">
            <div className="grid w-full grid-cols-3 place-items-end">
              <h2>{datas.third.thrGrade}</h2>
              <h2>{datas.third.thrMarks}</h2>
              <p className="text-gray-500">{datas.third.thrTeam}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 mr-4 gap-4">
          <FaEdit className="cursor-pointer" onClick={handleEdit}/>
        <AiFillDelete  className="cursor-pointer" onClick={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default ResultShow