import React from "react";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className="mx-auto flex flex-col p-6">{children}</div>;
};

export default Page;
