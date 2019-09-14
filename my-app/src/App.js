import React, { Component } from 'react';
import TextCounter from "./TextCounter";
import MyForm from "./MyForm";
import MyForm2 from "./MyForm2";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <TextCounter
                            labelTextCounter={"First counter"}
                            idRelation={"txtArea1"}
                            limit={20} />
                    </div>
                    <div className="col-4">
                        <TextCounter
                            labelTextCounter={"Second counter"}
                            idRelation={"txtArea2"}
                            limit={10} />
                    </div>
                    <div className="col-4">
                        <TextCounter />
                    </div>
                </div>
                <hr />
                <MyForm />
                <hr />
                <MyForm2 />
            </div>
        );
    }
}

export default App;
