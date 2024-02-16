import { useEffect, useState } from 'react';

const passwordRegex: RegExp =
  /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-])(?=.*[a-zA-Z])(?=.*\d).{8,20}$/;

export default function useNewPassword() {
  const [password, setPassword] = useState('');

  const [errorMessageOnPassword, setErrorMessageOnPassword] = useState('');

  const [passwordCheck, setPasswordCheck] = useState('');

  const [errorMessageOnPasswordCheck, setErrorMessageOnPasswordCheck] =
    useState('');

  const handlePassword = (password: string) => setPassword(password);

  const handlePasswordCheck = (password: string) => setPasswordCheck(password);

  const validatePassword = (password: string): boolean => {
    return passwordRegex.test(password);
  };

  const onCheckPasswordRegex = (password: string): boolean => {
    if (!validatePassword(password)) {
      setErrorMessageOnPassword('비밀번호 작성 규칙에 맞게 작성해 주세요');
      return false;
    }
    setErrorMessageOnPassword('');
    return true;
  };

  const onCheckPasswordAndPasswordCheck = (
    password: string,
    passwordCheck: string
  ): boolean => {
    if (password !== passwordCheck) {
      setErrorMessageOnPasswordCheck('비밀번호와 일치하지 않아요');
      return false;
    }
    setErrorMessageOnPasswordCheck('');
    return true;
  };

  useEffect(() => {
    if (password.length > 0) {
      onCheckPasswordRegex(password);
    } else {
      setErrorMessageOnPassword('');
    }
    if (passwordCheck.length > 0) {
      onCheckPasswordAndPasswordCheck(password, passwordCheck);
    } else {
      setErrorMessageOnPasswordCheck('');
    }
  }, [password, passwordCheck]);

  return {
    handlePassword,
    handlePasswordCheck,
    errorMessageOnPassword,
    errorMessageOnPasswordCheck,
    password,
    canChangePassword:
      errorMessageOnPassword === '' && errorMessageOnPasswordCheck === '',
  };
}
