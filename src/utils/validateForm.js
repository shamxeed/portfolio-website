const validateForm = ({ name, email, message }) => {
  let error;

  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.exec(
    email
  );

  if (name.trim().length <= 6) {
    error = 'Name is too short!';
    return { error };
  }

  if (!isEmailValid) {
    error = 'Please enter a valid email address.';
    return { error };
  }

  if (message.trim().length <= 15) {
    error = 'Message is too short!';
    return { error };
  }

  return { error };
};

export { validateForm };
