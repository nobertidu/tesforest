enum nameFieldsValue {
    name
}

interface IFormFields {
    name: nameFieldsValue.name
    email: string;
    message: string;
}

export const contactUsFields = [
    {
        id: 1,
        name: `name`,
        requiredTitle: `Name is required`,
        pattern: {
            value: ``,
            message: ``
        },
        placeholder: `Name*`
    },
    {
        id: 2,
        name: `email`,
        requiredTitle: `Email is required`,
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: `Please, enter valid Email!`
        },
        placeholder: `Email adress or Telegram handle*`
    },
    {
        id: 3,
        name: `message`,
        requiredTitle: `Message is required`,
        pattern: {
            value: ``,
            message: ``
        },
        placeholder: `Message*`
    }
]