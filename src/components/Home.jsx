//import React from 'react'

const Home = () => {
  return (
    <div>
        
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<div>
    <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900">
            <div className="flex items-center flex-shrink-0 px-4">
                <img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-alt.svg" alt="" />
            </div>

            <div className="flex flex-col flex-1 px-3 mt-8">
                <div className="space-y-4">
                    <nav className="flex-1 space-y-2">
                        <a href="#" title="" className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Tickets
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Agents
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Customers
                            <svg className="w-4 h-6 ml-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </nav>

                    <hr className="border-gray-700" />

                    <nav className="flex-1 space-y-2">
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Products
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Orders
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Analytics
                            <svg className="w-4 h-6 ml-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </nav>

                    <hr className="border-gray-700" />

                    <nav className="flex-1 space-y-2">
                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group">
                            <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings
                        </a>
                    </nav>
                </div>

                <div className="pb-4 mt-auto">
                    <button type="button" className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700">
                        <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                        Mariana Jones
                        <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col flex-1 overflow-x-hidden xl:pl-64">
        <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
            <div className="flex flex-1 px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center -m-2 xl:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="flex ml-6 xl:ml-0">
                        <div className="flex items-center flex-shrink-0">
                            <img className="block w-auto h-8 xl:hidden" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg" alt="" />
                        </div>
                    </div>

                    <div className="flex-1 hidden max-w-xs ml-8 mr-auto xl:ml-0 lg:block">
                        <label htmlFor="" className="sr-only"> Search </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>

                            <input type="search" name="" id="" className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
                        </div>
                    </div>

                    <div className="flex items-center ml-auto space-x-6">
                        <div className="relative">
                            <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </button>
                            <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"> 2 </span>
                        </div>

                        <div className="relative">
                            <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </button>
                        </div>

                        <button type="button" className="flex items-center max-w-xs rounded-full xl:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            <img className="object-cover bg-gray-300 rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <main>
            <div className="py-6">
                <div className="px-4 mx-auto sm:px-6 md:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 object-cover rounded-full w-14 h-14" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                            <div className="ml-5">
                                <p className="text-lg font-bold text-gray-900">Hey Mariana Jones! 👋</p>
                                <p className="mt-1 text-sm font-medium text-gray-500">Hope you are having a great day</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start mt-5 space-x-5 sm:justify-end sm:mt-0">
                            <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="w-5 h-5 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Jan 7 - Feb 6
                            </button>

                            <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                    <div className="space-y-5 sm:space-y-6">
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Sales Statistics</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Last 30 days: $84,840</p>

                                    <div id="chart1" className="mt-0"></div>
                                </div>
                            </div>

                            <div className="space-y-6 lg:col-span-2">
                                <div className="overflow-hidden border border-indigo-200 bg-indigo-50 rounded-xl">
                                    <div className="px-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Active users</p>
                                                <p className="mt-2 text-xl font-bold text-gray-900">15,693</p>
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                    <div className="px-4 py-5 sm:p-6">
                                        <img className="object-cover rounded-full w-14 h-14" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-male-3.png" alt="" />
                                        <p className="mt-6 text-xs font-semibold tracking-widest text-indigo-600 uppercase">New request</p>
                                        <p className="mt-6 text-lg font-medium text-gray-900"><span className="font-bold">Daniel Barton</span> wants to get a free website consultation</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                                        <div className="flex items-center mt-6 space-x-4">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                Decline
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
                                            >
                                                Accept
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                                <div className="px-4 py-5 sm:px-6">
                                    <p className="text-base font-bold text-gray-900">Recent Leads</p>
                                </div>

                                <div className="flex flex-col mt-2">
                                    <div className="-my-2 overflow-x-auto">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <table className="min-w-full lg:divide-gray-200 lg:divide-y">
                                                <thead className="hidden lg:table-header-group">
                                                    <tr>
                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Customer</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Email Address</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Phone Number</th>

                                                        <th className="py-3.5 sm:px-6 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Country</th>
                                                    </tr>
                                                </thead>

                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-male.png" alt="" />
                                                                Darrell Steward
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-male-2.png" alt="" />
                                                                Ronald Richards
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                                                                Jane Cooper
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="px-4 py-4 text-sm font-bold text-gray-900 align-top sm:px-6 lg:align-middle whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female-2.png" alt="" />
                                                                Jacob Jones
                                                            </div>
                                                            <div className="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        ></path>
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    ></path>
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top sm:px-6 lg:align-middle lg:text-left whitespace-nowrap">USA</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden border border-gray-200 lg:col-span-2 bg-gray-50 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Import Customer Data</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>

                                    <div className="mt-6 space-y-3">
                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/mailchimp-logo.png" alt="" />
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">MailChimp</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Customers</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                            </svg>
                                                            Import
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/convertkit-logo.png" alt="" />
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">ConvertKit</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Customers</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                            </svg>
                                                            Import
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/planning-center-logo.png" alt="" />
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Planning Center</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Customers</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                            </svg>
                                                            Import
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-2 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Leads Breakdown</p>

                                    <div id="chart2" className="mt-6 -translate-x-10"></div>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="sm:flex sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-base font-bold text-gray-900">Transactions</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                        </div>

                                        <div className="mt-4 sm:mt-0">
                                            <a href="#" title="" className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900">
                                                See all Transactions
                                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="divide-y divide-gray-200">
                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                Completed
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">Visa card **** 4831</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Card payment</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">$182.94</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">Amazon</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                Completed
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">Mastercard **** 6442</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Card payment</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">$99.00</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">Facebook</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                Pending
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">Account ****882</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Bank payment</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">$249.94</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">Netflix</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                Canceled
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">Amex card **** 5666</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Card payment</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">$199.24</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">Amazon Prime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

{/* <script>
    var chart1Options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: 'New user',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
            },
            {
                name: 'Returning user',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '32%',
                endingShape: 'rounded',
                borderRadius: 3,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        colors: ['#4F46E5', '#E4E4E7'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
    }

    var chart1 = new ApexCharts(document.querySelector('#chart1'), chart1Options)

    chart1.render()

    var chart2Options = {
        chart: {
            type: 'donut',
            width: '120%',
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                    },
                },
            },
        },
        series: [68, 22, 10],
        labels: ['Direct Source', 'Referral', 'Social'],
        colors: ['#4F46E5', '#C7D2FE', '#E0E7FF'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
    }

    var chart2 = new ApexCharts(document.querySelector('#chart2'), chart2Options)

    chart2.render()
</script> */}



    </div>
  )
}

export default Home