import React from "react";
import { useSession } from "next-auth/client";
import Link from "next/link";

const Account = () => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <div>
        <Link href='/auth/signin'>
          <a>Sign in</a>
        </Link>
      </div>
    );
  }

  return (
    <div className='cursor-pointer flex items-center'>
      <Link href='/auth/me'>
        <a>
        <p>{session.user.name}</p>
        </a>
      </Link>
    </div>
  );
};

export default Account;
