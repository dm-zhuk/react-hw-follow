import { Alert } from "./Alert";

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
}; */

const App = () => {
  return (
    <>
      <Alert>Please update ypur email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert>
    </>
  );
};
