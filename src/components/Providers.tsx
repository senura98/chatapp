//we need to render context hook as a client component to store state for entire application
"use client";

import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

//we will be wrapping the entire app in root layout using the provider component to be able use tosters throught the program
interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default Providers;
