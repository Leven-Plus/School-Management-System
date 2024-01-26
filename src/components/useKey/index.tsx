import { useEffect } from 'react';

type UseKeyProps = {
    pressKey: string,
    cb: Function,
    disible?: boolean
}

const  UseKey = ({pressKey, cb, disible=false}:UseKeyProps) => {

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!disible) {
                if (event.key == pressKey)  {
                    cb()
                }
            };
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return <></>;
};

export default UseKey;
