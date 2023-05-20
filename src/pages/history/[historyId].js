import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Page from "@/web/components/Page"
import formatDateTime from "@/web/utils/dateTime.js"

const HistoryId = () => {
  const [data, setData] = useState([])
  const router = useRouter()
  const { historyId } = router.query
  console.log(historyId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (historyId) {
          const response = await axios.get(
            `http://localhost:4000/api/nmap/history/${historyId}`
          )
          const { result } = response.data
          setData(result)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [historyId])

  return (
    <Page>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                {data.ip}
              </h1>
              <h2 className="text-gray-600 mt-2">
                {formatDateTime(data.date)}
              </h2>
              <p className="text-gray-500 mt-4">{data._id}</p>
              <div className="mt-4">
                {data.resultScan?.split("\n").map((line, index) => (
                  <p key={index} className="text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HistoryId
