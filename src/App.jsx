import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(5);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    setUserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="items-center font-bold active:scale-75 hover:text-green-500 text-red-500 text-5xl m-3 flex justify-center ">
        IMAGE GALLERY
      </h1>
      {/* Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {userData.map((elem, idx) => (
          <div key={idx} className="w-60">
            <a href={elem.url} target="_blank" rel="noreferrer">
              <div className="h-44 w-full rounded-2xl overflow-hidden">
                <img
                  src={elem.download_url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-2 text-lg font-semibold">{elem.author}</h2>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold active:scale-90"
        >
          Prev
        </button>

        <h1 className="text-xl font-bold">Page {page}</h1>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold active:scale-90"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
