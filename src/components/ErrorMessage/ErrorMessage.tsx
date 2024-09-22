interface error {
  errorMessage: null | string;
}

const ErrorMessage: React.FC<error> = ({ errorMessage }) => {
  return (
    <div>
      <p>
        {errorMessage}. Please, try again later...
      </p>
    </div>
  );
};

export default ErrorMessage;