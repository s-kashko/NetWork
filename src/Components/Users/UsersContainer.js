import Users from './Users';
import { connect } from 'react-redux';
import { toggleFollowAC, setUsersAC } from '../../Redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch( toggleFollowAC(userId) ),
        setUsers: (users) => dispatch( setUsersAC(users) )
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;