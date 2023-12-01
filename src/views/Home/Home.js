import { Outlet } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div class="row scree-height">
                <div class="col border-right">
                    <h4>Resources</h4>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#/home/tests">Your Tests</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/home/questions">Your Questions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Question Banks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" >Custom Question</a>
                        </li>
                    </ul>
                    <Outlet />
                </div>
                <div class="col">
                    <h4>Create or Edit tests</h4>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link" href="#/home/questions">+</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#/home/tests">untitled</a>
                        </li>

                    </ul>
                </div>

            </div>




        </>
    );
}
export default Home;