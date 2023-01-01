import { connect } from "react-redux";
import Content from "./Content.jsx";

const mapStateToProps = (state) => {
    return {
        myInfo: state.aboutMeReducer.myInfo,
    }
}

export default connect(mapStateToProps, null)(Content);