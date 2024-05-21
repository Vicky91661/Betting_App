import React, { useState } from 'react'
import logo from "/logo.png"
import axios from 'axios';

function AdminGame() {
    const [loading,setLoading] = useState(false);
    const [error,setError]= useState("")
    const [data,setData] = useState()
    // TournamentName,teamOneName,teamOnebit,teamTwoName,teamTwobit,category
    const sendAdminData=async()=>{
       try {
            const response= await axios("http://localhost:3001/api/v1/admin/addgame")
       } catch (error) {
        
       }
    }
    const  changeForm = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log(data)
    }
  return (
    <div className='bg-blue-900 h-[100vh] text-white'>
        <img className='w-20 md:w-32' src={logo} alt="" />
        <div className='flex justify-center'>
        <div className='w-[60%]'>
        <h2 className="text-xl md:text-3xl font-medium mb-2 md:mb-4 text-white text-center">Admin Dashboard</h2>
                <form onSubmit={sendAdminData}>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-5 md:justify-between '>
                        <div className=" mb-1 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2" htmlFor="TournamentName">
                                Tournament Name
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                                <input
                                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white w-full ml-2"
                                    type="text"
                                    id="TournamentName"
                                    name='TournamentName'
                                    placeholder="Enter Tournament Name"
                                    onChange={changeForm}
                                />
                            </div>
                        </div>
                        <div className="mb-2 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2 cursor-pointer" htmlFor="teamOneName">
                                Team One
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                                <input
                                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white w-full ml-2"
                                    type="text"
                                    id="teamOneName"
                                    name='teamOneName'
                                    placeholder="Enter team one name"
                                    onChange={changeForm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-5 md:justify-between '>
                        <div className=" mb-1 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2" htmlFor="teamTwoName">
                                Team Two
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                                <input
                                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white w-full ml-2"
                                    type="text"
                                    id="teamTwoName"
                                    name='teamTwoName'
                                    placeholder="Enter team two name"
                                    onChange={changeForm}
                                />
                            </div>
                        </div>
                        <div className="mb-2 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2 cursor-pointer" htmlFor="teamOnebit">
                                Team One
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                                <input
                                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white w-full ml-2"
                                    type="number"
                                    id="teamOnebit"
                                    name='teamOnebit'
                                    placeholder="Enter team one bet price"
                                    onChange={changeForm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-5 md:justify-between '>
                        <div className=" mb-1 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2" htmlFor="teamTwobit">
                                Team Two
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                                <input
                                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white w-full ml-2"
                                    type="number"
                                    id="teamTwobit"
                                    name='teamTwobit'
                                    placeholder="Enter team two bet price"
                                    onChange={changeForm}
                                />
                            </div>
                        </div>
                        <div className="mb-2 md:mb-4 w-full">
                            <label className="block text-white mb-1 md:mb-2 cursor-pointer" htmlFor="category">
                                Categories
                            </label>
                            <div className="flex items-center bg-gray-800 p-1 md:p-2 rounded-md">
                            <select className='bg-gray-800 focus:outline-none focus:ring-0 text-white w-full ml-2'
                             name='cataegory'  onChange={changeForm} id="category">
                                <option value="cricket">Cricket</option>
                                <option value="football">Football</option>
                            </select>
                            </div>
                            
                
                        </div>
                    </div>
                   
                    {
                        loading? 
                        <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-1 md:py-2 rounded-md font-semibold hover:bg-pink-600 transition duration-200"
                        >
                            loading...
                        </button>: 
                        <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-1 md:py-2 rounded-md font-semibold hover:bg-pink-600 transition duration-200"
                        >
                             submit
                        </button>
                    }
                   
                    {error && error.map((e, index) => (
                        <div key={index} className='text-red-600 text-sm md:text-base md:font-medium'>{e}</div>
                    ))}
                </form>
        </div>
        </div>
        
    </div>
  )
}

export default AdminGame