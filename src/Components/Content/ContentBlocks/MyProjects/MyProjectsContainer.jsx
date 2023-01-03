import { connect } from "react-redux";
import MyProjects from "./MyProjects.jsx";

const mapStateToProps = (state) => {
    return {
        projects: state.projectsReducer.projects,
    }
}

export default connect(mapStateToProps, null)(MyProjects);