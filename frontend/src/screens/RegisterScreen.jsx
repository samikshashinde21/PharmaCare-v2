import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"

import { useRegisterMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"
import { toast } from "react-toastify"

const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()

  const { userInfo } = useSelector((state) => state.auth)

  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get("redirect") || "/"

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  // Function to validate the password
  const validatePassword = (password) => {
    const passwordConditions = [
      /[A-Z]/, // At least one uppercase letter
      /[a-z]/, // At least one lowercase letter
      /\d/, // At least one number
      /[!@#$%^&*(),.?":{}|<>]/, // At least one special character
      /.{8,}/, // Minimum length of 8 characters
    ]

    for (let condition of passwordConditions) {
      if (!condition.test(password)) {
        return false
      }
    }
    return true
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character."
      )
    } else {
      try {
        const res = await register({ name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate(redirect)
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
      <div className="page-content">
        <FormContainer>
          <h1>Sign Up</h1>

          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
              {passwordError && (
                <Form.Text className="text-danger">{passwordError}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="my-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button disabled={isLoading} type="submit" variant="primary">
              Register
            </Button>

            {isLoading && <Loader />}
          </Form>

          <Row className="py-3">
            <Col>
              Already have an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </div>
    </>
  )
}

export default RegisterScreen
