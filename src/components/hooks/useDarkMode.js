import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = ({isDarkModeOn}) => {
    const [someValue, setSomeValue] = useLocalStorage('keyForDarkMode', isDarkModeOn);
    useEffect(()=>{
        if(someValue){
            const bodyElement = document.body;
            bodyElement.classList.add("dark-mode");
        }else{
            const bodyElement = document.body;
            bodyElement.classList.remove("dark-mode");
        }
    }, [someValue])
    return [someValue, setSomeValue];
};