import React, {useState} from "react";

// 동적으로 값을 관리해야 할 때는 useState (상태) 라는 함수 사용

const Counter = () => {
    const [num, setNumber] = useState(0); // const num = 0과 같음, setNumber = num의 세터함수

    const increase = () => {
        setNumber(num + 1);
        // 반드시 세터 함수로 형태 관리
    };

    const decrease = () => {
        setNumber(num - 1);
    };


    return (
        <div>
            <button className="p-btn" onClick={increase}>+</button>
            <button className="m-btn" onClick={decrease}>-</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;

