import React from 'react'

import './Dashboard.css'

//import Nav from './Nav/Nav'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
             
            <div className = "Dashboard">
                {/* Top container */}
                <Top />
                
                {/* Sidebar/menu with Overlay effect*/}
                <Sidebar />
                
                {/*PAGE CONTENT! */}
                <div class="w3-main" style="margin-left:300px;margin-top:43px;">
                    
                    {/* Header */}
                    <PageHeader />

                    {/* Containers for Messages, petitions shared, & my organizations */}
                    <Containers />
                    
                    {/* Section with regional map and table of My Organizations */}
                    <myTable />

                    {/* Section with the Badges*/}
                    <Badges />
                    
                    {/* Section with Recommended Organizations */}
                    <Recommended />

                    {/* BottomBar */}
                    <BottomBar />

                    {/* Footer */}
                    <PageFooter />
                    
                    {/* End page content */}
                </div>    
        
            </div>   

        )

    }

}

export default Dashboard