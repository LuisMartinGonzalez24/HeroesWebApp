import React from 'react'

export const TestScreen = () => (

    <nav className="bg-gray-800 shadow dark:bg-gray-800">
        <div className="px-6 py-3 flex">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Companies</a>
                </div>
            </div>

            {/** Mobile Menu open: "block", Menu closed: "hidden"*/}
            <div className="w-full md:flex md:items-center md:justify-between">
                <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                    <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Marvel</a>
                    <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">DC</a>
                    <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Search</a>
                </div>

                <div className="relative">
                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
                </div>
            </div>
        </div>
    </nav>

);
