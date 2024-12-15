import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import {actionCreators as sideAction} from "../store/SideMenu";
import { useSelector, useDispatch } from 'react-redux';
import './SideMenu.css';

const SideMenu = (props) =>{
 
    const [activeItem, setActiveItem] = useState({});

    const handleItemClick = (e, {name}) => setActiveItem(name);
    const dispatch = useDispatch();
    const smallMenu = useSelector(state => state.sideMenu);

    const getMenu = () => {
        return (
            // <Menu fixed='right' borderless className={(smallMenu ? 'small-side' : '') + ' side'} vertical>
            <Menu fixed='right' borderless className={' side'} vertical>
                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                    name="info circle" />
                    <span style={{paddingRight: '3px'}}>اطلاعات پایه</span>
                </Menu.Header>
                <Menu.Item as={Link} to={'/deseases'} name='dashboard' active={activeItem === 'dashboard'}
                           onClick={handleItemClick} className='subMenu'>
                    <div className='subMenu'>بیماری ها</div>
                </Menu.Item>

                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                        name="users" />
                        <span style={{paddingRight: '3px'}}>اشخاص</span>
                </Menu.Header>
                <Menu.Item
                    as={Link} to={'/doctors'}
                    name='doctors' 
                    active={activeItem === 'doctors'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>پزشکان</div>
                </Menu.Item>
                <Menu.Item
                    as={Link} to={'/employees'}
                    name='employees' 
                    active={activeItem === 'employees'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>کارمندان</div>
                </Menu.Item>

                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                        name="address book"
                        style={{paddingLeft: '3px'}} />
                        <span style={{paddingRight: '5px'}}>پرونده ی بیماران</span>
                    </Menu.Header>
                <Menu.Item
                    as={Link} to={'/patients'}
                    name='patients' 
                    active={activeItem === 'patients'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>بیماران</div>
                </Menu.Item>
            </Menu>
        )
    }

    return(
        <div className='parent'>
        <div className={(smallMenu ? 'small-side ' : '') + 'side'}>
            {getMenu()}
        </div>
        <div className={(smallMenu ? 'small-content' : '') + 'content'}>
            {props.children}
        </div>
        </div>
    )
}

export default SideMenu