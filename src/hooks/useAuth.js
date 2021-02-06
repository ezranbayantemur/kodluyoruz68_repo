import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function useAuth() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  async function login(values) {
    try {
      setLoading(true);
      setError();
      return await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (err) {
      setLoading();
      setError(err);
    }
  }
  async function sign(values) {
    try {
      setLoading(true);
      setError();
      return await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (err) {
      setLoading();
      setError(err);
    }
  }

  return {loading, error, login, sign};
}
