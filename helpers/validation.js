export const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (emailVal) => {
  if (emailVal.length > 0) return regexp.test(emailVal);
};

export const validatePassword = (password) => {
  if (password.length > 0) return password.length > 6;
};
