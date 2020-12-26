import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Input from './components/input'

import "../src/styles/pages/myForm.css"

interface FormData {
  name: string,
  password: string,
}

const MyForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef)
  }

  return (
    <div className="container-myform">
      <Form ref={formRef} onSubmit={ handleSubmit }>
        <Input name="name" type="text" />
        <Input name='password' type="password"/>

        <button type='submit'>Inscrever</button>
      </Form>
    </div>
  )

}

export default MyForm