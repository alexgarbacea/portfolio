import React, {Component} from 'react';
import '../style/App.css';
import { projectList } from '../components/ProjList';
import ProjectDisplay from '../components/ProjectDisplay';
import Intro from '../components/Intro';
import About from '../components/about';
import Footer from '../components/footer';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: projectList
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <div><Intro /></div>
                <div id="About">
                    <About />
                </div>
                <div className="container">
                    <ProjectDisplay proj={projectList} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
        
    }
}

export default App;
