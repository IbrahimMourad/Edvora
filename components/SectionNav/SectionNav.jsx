import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Store } from '../../utils/Store';
import Nearest from '../Nearest/Nearest';
import Upcomming from '../Upcomming/Upcomming';
import Past from '../Past/Past';

import { data } from '../../utils/Data';
const SectionNav = () => {
  const {
    state: { selectedKey },
    dispatch,
  } = useContext(Store);

  const onSelect = (selectedKey) => {
    dispatch({ type: 'SET_MENU_TAB', payload: selectedKey });
  };

  const renderContent = (() => {
    switch (selectedKey) {
      case 'nearestRiders':
        return <Nearest data={data.ride} />;
      case 'upcommingRides':
        return <Upcomming data={data.ride} />;
      case 'pastRides':
        return <Past data={data.ride} />;
      default:
        return null;
    }
  })();

  return (
    <div className="select-ride">
      <Nav
        activeKey={selectedKey}
        onSelect={(selectedKey) => onSelect(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="nearestRiders">Nearest Riders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="upcommingRides">Upcomming Rides</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="pastRides">Past Rides</Nav.Link>
        </Nav.Item>
      </Nav>
      {renderContent}
    </div>
  );
};

export default SectionNav;
