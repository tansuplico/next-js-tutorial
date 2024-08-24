import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
