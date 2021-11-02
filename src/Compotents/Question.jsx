

import { useState } from "react";


const Question = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1>{data.question}</h1>
            <h3>{data.answer}</h3>
        </div>
    );
}

export default Question;