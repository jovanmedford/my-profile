import React from "react"
import { navigate } from "gatsby-link"
import tw from "twin.macro"

const TextInput = tw("input")`
  block w-full bg-bg-color rounded-sm py-2 pl-2 
  border-2 border-primary-700 border-solid
`
const TextArea = tw("textarea")`
  block w-full bg-bg-color rounded-sm h-28 p-2
  border-2 border-primary-700 border-solid
`
const Button = tw("button")`
  py-2 px-8 text-white bg-primary-500 rounded-md
  block mx-auto hover:bg-primary-700 
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      tw="w-9/12 max-w-xs
            flex flex-col gap-4"
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor="name">
          Name:
          <TextInput
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </label>
      </p>
      <label htmlFor="email">
        Email:
        <TextInput
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <p>
        <label htmlFor="message">
          Message:
          <TextArea id="message" name="message" onChange={handleChange} />
        </label>
      </p>
      <p>
        <Button type="submit">Send</Button>
      </p>
    </form>
  )
}
