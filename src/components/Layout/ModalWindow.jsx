import React from "react";
import { Button } from "../Atoms/Button";

export const ModalWindow = ({ isOpen, setIsOpen, message }) => {
  const width = "560px";
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      hidden={!isOpen}
      className="w-screen h-screen absolute top-0 left-0 bg-modalwindow"
    >
      <div
        className="bg-white h-96 mx-auto my-20 rounded-md animate-modalwindow"
        style={{ width: `${width}` }}
      >
        <div className="w-full flex justify-end pr-5 pt-2">
          <Button
            color="bg-white text-slate-500 hover:text-slate-300 font-bold"
            size="w-10 text-xl"
            label="x"
            onclick={handleClose}
          />
        </div>
        <div className="h-1/2 flex justify-center">
          <div className="my-auto text-2xl">{message}</div>
        </div>
        <div className="flex justify-center">
          <Button
            size="w-40 h-16"
            color="text-rose-50 bg-rose-400 hover:bg-rose-200"
            label="Accept"
            onclick={handleClose}
          />
        </div>
      </div>
    </div>
  );
};
