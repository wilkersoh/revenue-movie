import React, { useEffect } from "react";
import App from "@/components/layouts/index";
import Container from "@/components/Container";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from 'next/router';

const me = () => {
  const [session] = useSession();
  const router = useRouter();

  const logout = () => {
    signOut();

    router.push("/auth/signin");
  }

  useEffect(() => {
    if(session) return;

    router.push("/");
  }, [session])

  if(session) {
    <App>
      <Container>
          Redirect....
      </Container>
    </App>
  }

  return (
    <App>
      <Container>
        <div className='flex flex-col justify-center items-center py-20'>
          <div>
            <p>{session?.user?.name && `name: ${session.user.name}`}</p>
            <p>{session?.user?.email && `email: ${session.user.email}`}</p>
          </div>
          <div
            onClick={logout}
            className='py-2 px-10 bg-yellow-300 border-solid mt-20 rounded-md cursor-pointer hover:bg-yellow-400'>
            Sign Out
          </div>
        </div>
      </Container>
    </App>
  );
}

export default me
