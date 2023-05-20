import moment from "moment"

const formatDateTime = (dateTime) => {
  return moment(dateTime).format("DD/MM/YYYY HH:mm:ss")
}

export default formatDateTime
