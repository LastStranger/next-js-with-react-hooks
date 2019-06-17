import React, {useState} from 'react';


const InputElement = () => {
    const [inputText, setInputText] = useState('');
    const [historyList, setHistoryList] = useState([]);

    const changeHandle = (e) => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
    };
    return (
        <div>
            <input
                onChange={changeHandle}
                placeholder='Enter som text'/><br/>
            {inputText}
            <hr/>
            <br/>
            <ul>
                {historyList.map(item => <div>{item}</div>)}
            </ul>
        </div>
    )
};

export default InputElement;