import Li from "./Li"
import Link from "next/link"

const Page = (props) => {
  const { children } = props
  return (
    <div className="bg-blue-950 min-h-screen">
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Accueil
                </span>
              </Link>
              <Link href="/history">
                <span className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Historique
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Page
