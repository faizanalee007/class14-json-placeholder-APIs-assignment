import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const path = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albumData = await path.json();

  return (
    <main className="p-8 bg-gray-900 min-h-screen text-gray-100">
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold text-yellow-500 tracking-widest mb-4">
          Faizan Ahmed
        </h1>
        <h2 className="text-3xl font-semibold text-gray-300">
          A Curated Album Collection
        </h2>
      </header>

      <section className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {albumData.map((album: any) => (
            <div
              key={album.id}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-400 mb-3 leading-tight">
                <Link href={`/${album.id}`} className="hover:text-yellow-300">
                  {album.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-400">
                <span className="font-medium text-gray-500">Album ID:</span>{" "}
                {album.id}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
