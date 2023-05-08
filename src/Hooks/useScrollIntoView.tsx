import { useRouter } from "next/router";
import { useRef, useEffect, FC } from "react";
interface Props {
  children: React.ReactNode;
}
const useScrollIntoView = (path: string) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const CScrollIntoView = ({ children }: Props) => (
    <div ref={sectionRef}>{children}</div>
  );
  return { CScrollIntoView };
};

export { useScrollIntoView };
