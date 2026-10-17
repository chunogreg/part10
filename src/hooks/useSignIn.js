import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";
//import { useContext } from "react";
// import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onCompleted: async (data) => {
      const token = await data.authenticate.accessToken;

      // console.log("==TOKEN==", token);
    },
    onError: (err) => {
      console.log({ Error: err.message });
    },
  });

  const signIn = ({ username, password }) => {
    return mutate({
      variables: { credentials: { username, password } },
    });
  };

  return [signIn, result];
};

export default useSignIn;
