import { useState } from "react";
import Question from "./Question";


const Slider = () => {
    const [page, setPage] = useState(0);
    const [array, setArray] = useState([]);
    let arr = [
        {
            id: 1,
            question:"What is React ?",
            answer:"React is a free and open-source front-end JavaScript library for building user interfaces or UI components."
        },
        {
            id: 2,
            question:"What is Testing ?",
            answer:"oftware testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test."
        },
        {
            id: 3,
            question:"What is Jest ?",
            answer:"Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. "
        },
         {
            id: 4,
            question:"What is Cypress ?",
            answer:"Cypress is a purely JavaScript-based front end testing tool built for the modern web. It aims to address the pain points developers or QA engineers face while testing an application."
        },
          {
            id: 5,
            question:"What is Redux ?",
            answer:"Redux is an open-source JavaScript library for managing and centralizing application state."
        }
    ]
    const handleAdd = (value) => {
        if (page + value > arr.length-1) {
            alert("you are at last question");
            return "you are at last question";
        }
        setPage(page + value);
    }
    const handleDec = (value) => {
        if (page - value < 0) {
            return;
        }
        setPage(page - value);
    }
    return (
        <div>
            <h1 data-testid="page">{page+1}</h1>
            <Question data={arr[page]}></Question>
            <button  data-testid="button" onClick={()=>handleAdd(1)}>Next</button>
            <button data-testid="button2" onClick={()=>handleDec(1)}>Previous</button>
        </div>
    );
}

export default Slider;