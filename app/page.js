import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Witaj w mojej aplikacji!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Użyj menu po lewej stronie lub poniższych przycisków, aby przejść dalej.
      </p>
      <div className="flex gap-4">
        <Link
          href="/user/signup"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Rejestracja
        </Link>
        <Link
          href="/user/signin"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Logowanie
        </Link>
        <Link
          href="/user/profile"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Profil
        </Link>
      </div>
    </div>
  );
}
