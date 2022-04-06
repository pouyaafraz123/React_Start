import React, {useEffect, useState} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!term || term === "") {
                setResults([]);
                return;
            }
            (async () => {
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });
                setResults(data.query.search);
            })();
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    const renderedResults = results.map(result => {
        return (
            <div className={"item"} key={result.pageid}>
                <div className={"right floated content"}>
                    <a className={"ui button"} href={`https://en.wikipedia.com?curid=${result.pageid}`}>Go</a>
                </div>
                <div className={"content"}>
                    <div className={"header"}>{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter Search Term</label>
                    <input
                        className={"input"}
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className={"ui celled list"}>
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;