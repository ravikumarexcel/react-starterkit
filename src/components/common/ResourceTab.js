import { FormattedMessage } from "react-intl";

const ResourceTab = () => {
    return (
        <>
            <h4>
                <FormattedMessage id="home.title" />
            </h4>
            
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
        </>
    );
}
export default ResourceTab;