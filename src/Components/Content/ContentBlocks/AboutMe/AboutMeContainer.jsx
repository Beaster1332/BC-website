import { connect } from "react-redux";
import AboutMe from "./AboutMe.jsx";

const mapStateToProps = (state) => {
    return {
        myInfo: state.aboutMeReducer.myInfo,
        photo: state.aboutMeReducer.photo,
    }
}

export default connect(mapStateToProps, null)(AboutMe);