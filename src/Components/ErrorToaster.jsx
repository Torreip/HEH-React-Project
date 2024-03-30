import Alert from "react-bootstrap/Alert";

function ErrorToaster(props) {
    return (
        <Alert variant="danger" fixed="top">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{props.errorMessage}</p>
        </Alert>
    );
}

export default ErrorToaster;
