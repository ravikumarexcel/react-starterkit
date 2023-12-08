import { Outlet } from "react-router-dom";
import "./Home.css";
import { FormattedMessage } from "react-intl";
import ResourceTab from "../../common/ResourceTab";
import TestTabs from "../../common/TestTabs";
 
const Home = () => {
    return (
        <>
            <div class="row scree-height">
                <div class="col border-right">
                <ResourceTab>

                </ResourceTab>
                   
                    <Outlet />
                </div>


                <div class="col">
                    <TestTabs>

                    </TestTabs>
                   
                </div>

            </div>

        </>
    );
}
export default Home;