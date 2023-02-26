import Alert from "react-bootstrap/Alert";

function AlertMessage(props) {
  return (
    <Alert
      variant={props.variant}
      onClose={() => props.setAlertPassChange(false)}
      dismissible
    >
      <p>{props.message}</p>
    </Alert>
  );
}

export default AlertMessage;
