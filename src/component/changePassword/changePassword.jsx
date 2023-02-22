import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./changePassword.scss";

const ChangePassword = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.closeModal}>
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
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Retype password</Form.Label>
              <Form.Control type="email" placeholder="Retype password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="change-password-btn">Save Changes</button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ChangePassword;
