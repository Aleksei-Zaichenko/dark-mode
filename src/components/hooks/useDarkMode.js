import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarmMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('keyForDarkMode');
    useEffect(()=>{
        if(someValue){
            const bodyElement = document.getElementsByTagName("body");
            bodyElement.classList.add("dark-mode");
        }
        else{
            const bodyElement = document.getElementsByTagName("body");
            bodyElement.classList.remove("dark-mode");
        }
    }, [someValue])
    return [someValue, setSomeValue];
};