import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const FullLayout = () => {
    return (
        <>
            <header className="App-header">
                <Header />
            </header>
            <main>
                <div className="container-xxl">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
export default FullLayout;