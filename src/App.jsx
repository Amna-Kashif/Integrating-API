import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data)

  }
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="flex justify-center mb-8">
        <button
          onClick={getData}
          className="py-3 px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none">
          Fetch Your Data 🚀
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-lg overflow-hidden w-full transition-all transform hover:scale-105 hover:shadow-2xl">

            <img
              className="w-full h-48 object-cover rounded-t-lg mb-4 transition-all duration-500 transform hover:scale-110"
              src={elem.download_url}
              alt={elem.author}
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{elem.author}</h2>

              <div className="text-sm text-gray-600 flex justify-between mb-4">
                <h5 className="font-medium">Width: {elem.width}</h5>
                <h5 className="font-medium">Height: {elem.height}</h5>
              </div>

              <a
                href={elem.url}
                className="mt-4 py-2 px-3 bg-amber-950 hover:bg-red-700 text-white rounded-lg font-light shadow-md transition duration-500 transform hover:scale-105 flex justify-center items-center w-full">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App