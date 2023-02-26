import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Loading from "../spinner/spinner";
import "./changePassword.scss";

const ChangePassword = (props) => {
  const [password, setPassword] = useState({
    password: "",
    retypePassword: "",
  });
  const [error, setError] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const getPasswordValue = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    setIsLoad(true);
    const updatePass = await axios.post("/user/update-password", password, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (updatePass.data.err) {
      setError(updatePass.data.err);
    } else {
      setPassword({
        ...password,
        password: "",
        retypePassword: "",
      });
      props.setShowModal(false);
      setError("");
      props.setAlertPassChange(true);
    }
    setIsLoad(false);
  };

  // updare password error
  const errorUpdatePassword = () => {
    if (error.length > 0) {
      return (
        <div className="change-password-error">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
              fill="#292929"
            />
          </svg>
          {error}
        </div>
      );
    } else {
      return "";
    }
  };
  // updare password error

  // update password loader active
  const isLoading = isLoad ? <Loading /> : "";
  // update password loader active

  return (
    <>
      <Modal show={props.show} onHide={props.closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 11C18.7 11 19.37 11.1 20 11.29V10C20 8.9 19.1 8 18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H12.26C11.5275 20.9511 11.0967 19.7214 11.0144 18.4447C10.9322 17.168 11.2017 15.8932 11.7935 14.759C12.3854 13.6247 13.277 12.6746 14.3712 12.0118C15.4655 11.349 16.7206 10.9991 18 11ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6Z"
                fill="#292929"
              />
              <path
                d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM18 15C18.83 15 19.5 15.67 19.5 16.5C19.5 17.33 18.83 18 18 18C17.17 18 16.5 17.33 16.5 16.5C16.5 15.67 17.17 15 18 15ZM18 21C16.97 21 16.06 20.48 15.52 19.68C16.25 19.26 17.09 19 18 19C18.91 19 19.75 19.26 20.48 19.68C19.94 20.48 19.03 21 18 21Z"
                fill="#292929"
              />
            </svg>
            Update your password
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={updatePassword}>
          <Modal.Body>
            {/* loading display */}
            {isLoading}
            {/* loading display */}
            {/* error message */}
            {errorUpdatePassword()}
            {/* error message */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={password.password}
                onChange={getPasswordValue}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Retype password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype password"
                name="retypePassword"
                value={password.retypePassword}
                onChange={getPasswordValue}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="change-password-btn">Update password</button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ChangePassword;
