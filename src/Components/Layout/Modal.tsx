import React from "react";
interface Props {
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ open, children }: Props) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="bg-[#171717A1] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative m-auto max-w-sm">
          {/*content*/}
          {children}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export { Modal };
