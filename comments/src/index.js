import React from "react";
import ReactDOM from "react-dom";
import faker from "faker"
import CommentDetail from "./CommentDetail"
import ApprovalCArd from "./ApprovalCArd";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCArd>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want do go on with this?
                </div>
            </ApprovalCArd>
            <ApprovalCArd>
                <CommentDetail 
                    author="Ronaldo" 
                    timeAgo="Today at 4:43PM"
                    content="Fala meu querido"
                    avatar= {faker.image.avatar()}
                />
            </ApprovalCArd>
            <ApprovalCArd>
                <CommentDetail 
                    author="Tião" 
                    timeAgo="Today at 2:43PM"
                    content="Opa meu querido"
                    avatar= {faker.image.avatar()}
                />
             </ApprovalCArd>
             <ApprovalCArd>
                <CommentDetail 
                    author="Tuta" 
                    timeAgo="Today at 5:52PM"
                    content="Diga meu querido"
                    avatar= {faker.image.avatar()}
                /> 
             </ApprovalCArd> 
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));