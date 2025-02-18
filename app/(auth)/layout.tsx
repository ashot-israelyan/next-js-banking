import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/auth-image.svg"
          alt="Auth Image"
          width={500}
          height={500}
          className="rounded-l-xl object-contain"
        />
      </div>
    </main>
  );
}
