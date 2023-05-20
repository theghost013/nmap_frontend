import Page from "@/web/components/Page"
import { useEffect, useState } from "react"
import axios from "axios"
import formatDateTime from "@/web/utils/dateTime.js"

const History = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { result },
        } = await axios.get("http://localhost:4000/api/nmap/history")

        setHistory(result)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <Page>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          {history?.map((scan) => (
            <div
              key={scan._id}
              className="bg-white shadow overflow-hidden sm:rounded-lg mb-4"
            >
              <a
                href={`/history/${scan._id}`}
                className="block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                <div className="px-4 py-5 sm:px-6">
                  <h1 className="text-lg leading-6 font-medium text-gray-900">
                    {scan.ip}
                  </h1>
                  <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    {formatDateTime(scan.date)}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default History
