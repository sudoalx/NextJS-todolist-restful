"use client";

import { SessionProvider } from "next-auth/react";

interface AuthPageProps {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
  ...rest
}: Readonly<AuthPageProps>) {
  return <SessionProvider>{children}</SessionProvider>;
}
