import React from 'react';
import MainTable from "../MainTable/MainTable";

class MainPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <MainTable/>
            </div>
        )
    }

}

export default MainPage;