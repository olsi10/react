import React, { useState } from "react";

// 동적으로 값을 관리해야 할 때는 useState (상태) 라는 함수 사용

const Input2 = () => {
    const [inputs, setInputs] = useState({ // 값이 많을 경우 객체 형식으로 사용
        name: "",
        email: "",
        tell: ""
    });

    // es6 문법 객체 분해기법
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value;  이런 경우는 상태 관리 불가
        // 객체나 배열 같은 경우 힙 메모리에 관리되는데
        // 참조 주소만 갖고 있어서 특정 값을 바꾸면 리액트는 참조 값만 알기 때문에
        // 값의 상태를 몰라서 바뀌었는지 모른다.

        // 깊은 복사, 분해 (새 객체), 스프레드 기법
        setInputs({
            ...inputs, //   == name: "", email: "", tell: ""
            [id] : value
        });

        // const email = e.target.email;
        // const tel = e.target.tel;
    }

    return (
        <div>
            {/* <input className="input" type="text" value={txtValue} onChange={onChange}></input>
            <br />
            <p>{txtValue}</p> */}

            <div>
                <label>이름</label>
                <input id="name" type="text" value={name} onChange={onChange}></input>
            </div>

            <div>
                <label>이메일</label>
                <input id="email" type="email" value={email} onChange={onChange}></input>
            </div>

            <div>
                <label>전화번호</label>
                <input id="tel" type="tel" value={tel} onChange={onChange}></input>
            </div>

            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>

        </div>

        
        
    );
}

export default Input2;

