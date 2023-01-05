import React, { useState } from "react";

// 동적으로 값을 관리해야 할 때는 useState (상태) 라는 함수 사용

const Input = () => {
    const [txtValue, setTextValue] = useState(""); // const textValue = []과 같음

    const onChange = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <div>
            <input className="input" type="text" value={txtValue} onChange={onChange}></input>
            <br />
            <p>{txtValue}</p>
        </div>
    );
}

export default Input;

