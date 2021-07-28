import React from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Account = () => {
  // const [session, loading] = useSession();
  const router = useRouter();

  const goToSignUp = () => {
    router.push("/account/signup");
  }

  // console.log(`session: `, session)

  // if (!session) {
  //   return <div onClick={goToSignUp}>Sign in</div>;
  // }

  return (
    <div className='cursor-pointer flex items-center'>
      <p>Logo</p>
    </div>
  );
};

export default Account;
