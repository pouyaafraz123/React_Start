import React, {useEffect, useState} from "react";
import axios from "axios";

const Convert = ({language, text}) => {
    const [translate, setTranslate] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    useEffect(() => {
        const TimeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(TimeoutId);
        }
    }, [text]);
    useEffect(() => {
        const doTranslate = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
            setTranslate(data.data.translations[0].translatedText);
        }

        doTranslate();
    }, [debouncedText, language]);
    return <div><h1 className={'ui header'}> {translate} </h1></div>
}

export default Convert;