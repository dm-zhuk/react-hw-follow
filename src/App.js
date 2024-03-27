/* const App = () => {
  return (
    <p
      style={{
        margin: 8,
        padding: '12px 16px',
        borderRadius: 4,
        backgroundColor: 'gray',
        color: 'white',
      }}
    >
      Please update ypur email!
    </p>
  );
};

const alertStyles = {
  padding: '12px 16px',
  borderRadius: 4,
  backgroundColor: 'gray',
  color: 'white',
};

const App = () => {
  return (
    <>
      <p style={alertStyles}>Please update ypur email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </>
  );
};

const App = () => {
  return (
    <>
      <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert>
    </>
  );
}; */

import { Alert } from "./components/Alert.js";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};
