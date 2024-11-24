import React, { useEffect, useState } from "react"
import { Table, Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes, FaCheck } from "react-icons/fa"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useProfileMutation } from "../slices/usersApiSlice"
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice"
import { setCredentials } from "../slices/authSlice"
import { Link } from "react-router-dom"

const ProfileScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  //const redirect = location.search ? location.search.split("=")[1] : "/"

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  //const [passwordError, setPasswordError] = useState("")

  const { userInfo } = useSelector((state) => state.auth)

  const { data: orders, isLoading, error } = useGetMyOrdersQuery()

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()

  useEffect(() => {
    if (!userInfo) {
      navigate("/login")
    }
  }, [navigate, userInfo])

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.email, userInfo.name])

  const dispatch = useDispatch()

  // Function to validate the password
  const validatePassword = (password) => {
    const passwordConditions = [
      /[A-Z]/, // Must contain an uppercase letter
      /[a-z]/, // Must contain a lowercase letter
      /\d/, // Must contain a digit
      /[!@#$%^&*(),.?":{}|<>]/, // Must contain a special character
      /.{8,}/, // Must be at least 8 characters long
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
      alert("Passwords do not match")
      return
    }

    try {
      const payload = { name, email, password: password || undefined }
      const res = await updateProfile(payload).unwrap()

      dispatch(setCredentials(res))

      toast.success("Profile updated successfully")
      navigate("/profile")
    } catch (err) {
      console.error("Error updating profile:", err)
      toast.error(err?.data?.message || "Failed to update profile")
    }
  }

  return (
    <>
      <div className="page-content">
        <Row>
          <Col md={3}>
            <h2>User Profile</h2>

            <Form onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    console.log("Name updated:", e.target.value)
                  }}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
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
                <Form.Text className="text-muted">
                  Password must be at least 8 characters long, contain an
                  uppercase letter, a lowercase letter, a number, and a special
                  character.
                </Form.Text>
              </Form.Group>

              <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                disabled={loadingUpdateProfile}
              >
                {loadingUpdateProfile ? "Updating..." : "Update"}
              </Button>
              {loadingUpdateProfile && <Loader />}
            </Form>
          </Col>

          <Col md={9}>
            <h2>My Orders</h2>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">
                {error?.data?.message ||
                  error?.error ||
                  "An error occurred while fetching orders."}
              </Message>
            ) : (
              <Table striped hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        {order.isPaid ? (
                          <FaCheck style={{ color: "green" }} />
                        ) : (
                          <FaTimes style={{ color: "red" }} />
                        )}
                      </td>
                      <td>
                        {order.isDelivered ? (
                          <FaCheck style={{ color: "green" }} />
                        ) : (
                          <FaTimes style={{ color: "red" }} />
                        )}
                      </td>
                      <td>
                        <Button
                          as={Link}
                          to={`/order/${order._id}`}
                          className="btn-sm"
                          variant="light"
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ProfileScreen
