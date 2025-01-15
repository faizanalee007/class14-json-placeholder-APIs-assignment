import Link from "next/link";

export default async function Home() {
  const path = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albumData = await path.json();

  return (
    <main className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="pt-4 text-6xl font-extrabold text-center text-yellow-500 tracking-wide">
        Faizan Ahmed
      </h1>
      <h2 className="text-4xl font-semibold text-center text-gray-300 mt-4 mb-8">
        Album Collection
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albumData.map((album: any) => (
          <div
            key={album.id}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h2 className="text-lg font-semibold text-yellow-400 mb-2">
              <Link href={`/${album.id}`} className="hover:text-yellow-300">
                {album.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-400">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
