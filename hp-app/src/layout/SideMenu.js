import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux';
import './SideMenu.css';

const SideMenu = (props) =>{
 
    const [activeItem, setActiveItem] = useState({});

    const handleItemClick = (e, {name}) => setActiveItem(name);
    const dispatch = useDispatch();
    const smallMenu = useSelector(state => state.sideMenu);

    const getMenu = () => {
        return (
            <Menu fixed='right' borderless className={' side'} vertical>
                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                    name="info circle" />
                    <span style={{paddingRight: '3px'}}>Basic Information</span>
                </Menu.Header>
                <Menu.Item as={Link} to={'/diseases'} name='diseases' active={activeItem === 'diseases'}
                           onClick={handleItemClick} className='subMenu'>
                    <div className='subMenu'>Diseases</div>
                </Menu.Item>

                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                        name="users" />
                        <span style={{paddingRight: '3px'}}>Persons</span>
                </Menu.Header>
                <Menu.Item
                    as={Link} to={'/doctors'}
                    name='doctors' 
                    active={activeItem === 'doctors'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>Doctors</div>
                </Menu.Item>
                <Menu.Item
                    as={Link} to={'/employees'}
                    name='employees' 
                    active={activeItem === 'employees'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>Employees</div>
                </Menu.Item>

                <Menu.Header className='mainMenu'>
                    <Icon size='large'
                        name="address book"
                        style={{paddingLeft: '3px'}} />
                        <span style={{paddingRight: '5px'}}>Patient Files</span>
                    </Menu.Header>
                <Menu.Item
                    as={Link} to={'/patients'}
                    name='patients' 
                    active={activeItem === 'patients'}
                    onClick={handleItemClick}>
                    <div className='subMenu'>Patients</div>
                </Menu.Item>
            </Menu>
        )
    }

    return(
        <div className='parent'>
        <div className={(smallMenu ? 'small-side ' : '') + 'side'}>
            {getMenu()}
        </div>
        <div className={(smallMenu ? 'small-content ' : '') + 'content'}>
            {props.children}
        </div>
        </div>
    )
}

export default SideMenu