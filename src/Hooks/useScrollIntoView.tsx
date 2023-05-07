import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
const useScrollIntoView = (path: string) => {
  const sectionRef = useRef(null);
  let router = useRouter();
  useEffect(() => {
    if (sectionRef.current === null) {
      return;
    }
    if (router.asPath === path)
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [router, path]);
  let Component: JSX.Element = <div ref={sectionRef}></div>;
  return { Component };
};

export { useScrollIntoView };
