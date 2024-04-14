import Alert from "react-bootstrap/Alert";

function ErrorToaster(props) {
    return (
        <Alert variant="danger" fixed="top">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{props.errorMessage}</p>
            {props.link == "" ? (
                ""
            ) : (
                <a href={props.link ? props.linkD : "/"}>Go back to home</a>
            )}
        </Alert>
    );
}

export default ErrorToaster;
