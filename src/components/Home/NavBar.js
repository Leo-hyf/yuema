import * as React from "react"
import {Menu} from 'antd';
import {changeTab} from '../../actions/index';
import '../../styles/styles.scss';
import store from "../../store";
import {connect} from "react-redux"
import LogoutPopover from "./NavBar/LogoutPopover"


class NavBar extends React.Component {

    handleClickTab = e => {
        this.props.dispatch(changeTab(e.key));
    };

    render() {
        const states=  store.getState();

        const current = states.currentTab;

        return (
            <div className='navbar-container'>
                <Menu onClick={this.handleClickTab} selectedKeys={[current]} mode="horizontal" style={{float:'left',width:'1000px', display:"flex"}}>
                    <Menu.Item key="account">
                        My Account
                    </Menu.Item>
                    <Menu.Item key="people">
                        Intersting People
                    </Menu.Item>
                    <Menu.Item key="store">
                        Intersting Store
                    </Menu.Item>
                    <Menu.Item key="about">
                        About
                    </Menu.Item>
                    <Menu.Item key="addStore" className='admin-role-element' style={{display : states.isAdmin ? "block":"none"}}>
                        Add Store
                    </Menu.Item>
                </Menu>
                <div style={{float:'right', width: '20%',marginTop:"10px"}}>
                    <h3 style={{float:'left',marginTop:"5px"}}> {`Hello,${states.firstName}`}</h3>
                    <LogoutPopover email={states.email}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({currentTab: state.currentTab,firstName: state.firstName, lastName: state.lastName});
export default connect(mapStateToProps)(NavBar);