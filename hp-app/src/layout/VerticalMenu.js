import React from "react";
import { Icon, Menu, Rail } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default  VerticalMenu = () => {
  const [activeItem, setActiveItem] = useState({});
  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });


    return (
      <Menu fluid inverted vertical>
        <NavLink to={"/Dashboard"}>
          <Menu.Item
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={handleItemClick}
          >
            <Rail position="right">
              <Icon color="teal" name="home" />
            </Rail>
            Dashboard
          </Menu.Item>
        </NavLink>

        <NavLink to={"/appointments"} exact>
          <Menu.Item
            name="appointments"
            active={activeItem === "appointments"}
            onClick={handleItemClick}
          >
            <Icon name="calendar" />
            Appointments
          </Menu.Item>
        </NavLink>

        <NavLink to={"/patients"} exact>
          <Menu.Item
            name="patients"
            active={activeItem === "patients"}
            onClick={handleItemClick}
          >
            <Icon name="users" />
            Patients
          </Menu.Item>
        </NavLink>

        <NavLink to={"/card"} exact>
          <Menu.Item
            name="card"
            active={activeItem === "card"}
            onClick={handleItemClick}
          >
            Card
          </Menu.Item>
        </NavLink>
      </Menu>
    );
}
