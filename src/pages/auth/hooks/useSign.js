import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export function useSign() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function sign(email, password) {
    setError(null);
    setLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  return {loading, error, response, sign};
}
