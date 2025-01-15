

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const path = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albumData = await path.json();

  return (
    <main className="p-6 bg-yellow-500 min-h-screen">
      <h1 className="pt-4 text-6xl font-bold text-center  ">Faizan Ahmed</h1><br />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        
        Album Collection
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albumData.map((album: any) => (
          <div
            key={album.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              <Link href={`/${album.id}`} className="hover:text-blue-600">
                {album.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
