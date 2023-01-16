import React from "react";

export function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Image({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return <img src={src} alt={alt} className={className} />;
}
