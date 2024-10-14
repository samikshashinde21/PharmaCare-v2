import { Alert } from "react-bootstrap"

const Message = ({ variant, children }) => {
  return
  ;<Alert variant={variant}>{Children}</Alert>
}

Message.defaultProps = {
  variant: "info",
}

export default Message