import { spawn } from "child_process"
import mw from "@/api/mw.js"
import NmapModel from "@/api/db/models/NmapModel"

const nmap = mw({
  POST: [
    async (req, res) => {
      const ip = "127.0.0.1"
      return new Promise((resolve) => {})
    },
  ],
})

export default nmap
