
import React from "react";

const DynamicRoute = async (props: any) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${props.params.id}`
  );
  const data = await url.json();
  console.log("Single Title Response", data);

  return (
   <main className="flex justify-center items-center min-h-screen bg-yellow-600 p-6">
     
      <div className="bg-slate-500 shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Album Details
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-black">Album ID:</h2>
            <p className="text-xl text-gray-800 font-semibold">{props.params.id}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-black">Title:</h2>
            <p className="text-xl text-gray-800 font-semibold">{data.title}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-black">User ID:</h2>
            <p className="text-xl text-gray-800 font-semibold">{data.userId}</p>
          </div>
          {data.description && (
            <div>
              <h2 className="text-lg font-medium text-black">Description:</h2>
              <p className="text-xl text-gray-800 font-semibold">{data.description}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DynamicRoute;


