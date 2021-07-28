import React from "react";
import { signIn,  signOut, useSession } from "next-auth/client";
import App from "@/components/layouts/index";
import Container from "@/components/Container";

const signup = () => {
  return (
    <App>
      <Container>
        <div>
          <button onClick={() => signIn()}>Sign up</button>
        </div>
      </Container>
    </App>
  );
};

export default signup;
