import { useState } from "react";
import "./styles/App.css";
import { ModalWindow } from "./components/Layout/ModalWindow";
import { Button } from "./components/Atoms/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="my-auto">
        <Button
          size="w-52 h-20"
          color="text-rose-50 bg-rose-400 hover:bg-rose-200"
          label="push"
          onclick={handleOpen}
        />
      </div>
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} message="Hello, world!"/>
    </div>
  );
};

export default App;
