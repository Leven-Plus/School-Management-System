import { useEffect } from "react";

type UseKeyProps = {
  pressKey: string;
  cb: Function;
  disable?: boolean;
};

const UseKey = ({ pressKey, cb, disable = false }: UseKeyProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!disable) {
        if (event.key == pressKey) {
          cb();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <></>;
};

export default UseKey;
