"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <>
          <p>Bienvenido, {user.name}!</p>
        </>
      ) : ( null
      )}
    </div>
  );
}

