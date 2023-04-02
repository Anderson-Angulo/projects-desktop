import { Form,Button,Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useField } from "../hooks/useField"
import { createUser } from "../redux/states/user.slice"

const Formulario = () => {
  const EmailField=useField({type:"email"})
  const PasswordField=useField({type:"password"})
  const dispatcher=useDispatch()


  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      email:EmailField.value,
      password:PasswordField.value
    }
    dispatcher(createUser(data))
  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              {...EmailField}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control 
              {...PasswordField}
              placeholder="Password"
            />
          </Form.Group>
      
          <Button type="submit" variant="outline-primary" size="md">Enviar</Button>
        </Form>
      </Card.Body>   
    </Card>
  )
}
export default Formulario