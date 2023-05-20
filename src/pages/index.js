import Page from "@/web/components/Page"
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"

const CommandeNmap = () => {
  const initialValues = {
    ip: "",
    scanOption: "",
    secondaryScanOption: "",
    value: "",
  }

  const validationSchema = Yup.object({
    ip: Yup.string()
      .required("L'adresse IP est obligatoire")
      .test("valid-ip", "Veuillez entrer une adresse IP valide", (value) => {
        const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
        return ipRegex.test(value)
      }),
    scanOption: Yup.string().required("Veuillez choisir une option de scan"),
    secondaryScanOption: Yup.string().required(
      "Veuillez sélectionner une option"
    ),
    value: Yup.number().required("Veuillez entrer une valeur"),
  })

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:4000/api/nmap", values)
      .then((response) => {
        console.log(response.data)
        resetForm()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Page>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="max-w-md mx-auto mt-5">
            <div className="mb-4">
              <label htmlFor="ip" className="block mb-1 text-white">
                Adresse IP :
              </label>
              <Field
                type="text"
                id="ip"
                name="ip"
                placeholder="Adresse IP"
                className="border rounded-md px-2 py-1 w-full"
              />
              <ErrorMessage
                name="ip"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="scanOption" className="block mb-1 text-white">
                Option de scan :
              </label>
              <Field
                as="select"
                id="scanOption"
                name="scanOption"
                className="border rounded-md px-2 py-1 w-full"
              >
                <option value="">Choisir une option de scan</option>
                <option value="-sS">-sS</option>
                <option value="-sV">-sV</option>
                <option value="-sU">-sU</option>
                <option value="-sT">-sT</option>
                {/* Ajoutez d'autres options de scan ici */}
              </Field>
              <ErrorMessage
                name="scanOption"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <label
                  htmlFor="secondaryScanOption"
                  className="mr-2 text-white"
                >
                  Option :
                </label>
                <Field
                  as="select"
                  id="secondaryScanOption"
                  name="secondaryScanOption"
                  className="border rounded-md p-1 mr-4"
                >
                  <option value="">Select an option</option>
                  <option value="--max-retries">Max Retries</option>
                  <option value="--host-timeout">Host Timeout</option>
                  <option value="-p">Port</option>
                </Field>
                <Field
                  type="number"
                  id="value"
                  name="value"
                  placeholder="0"
                  className="border rounded-md p-1"
                />
              </div>
              <ErrorMessage
                name="secondaryScanOption"
                component="div"
                className="text-red-500"
              />
              <ErrorMessage
                name="value"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </Form>
        </Formik>
      </div>
    </Page>
  )
}

export default CommandeNmap
