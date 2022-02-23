import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Store } from '../../utils/Store';
import DriverBox from '../SectionNav/DriverBox';

const Nearest = ({ data }) => {
  const {
    state: { isLoading },
    dispatch,
  } = useContext(Store);
  const [list, setList] = useState([]);
  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    let goal = 40;
    let sortHelper = [];
    for (const [idx, value] of data.entries()) {
      let arr = value.station_path;
      if (!arr.includes(goal)) {
        const closest = arr.reduce(function (prev, curr) {
          return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
        });
        let distance = closest - goal;
        sortHelper.push([closest, idx]);
      } else {
        sortHelper.push([goal, idx]);
      }
    }
    sortHelper = sortHelper.sort(function (a, b) {
      return a[0] - b[0];
    });

    const sorted = sortHelper.map((el) => {
      data[el[1]].distance = [el[0]] - 40;
      return data[el[1]];
    });
    setList(sorted);

    setTimeout(() => dispatch({ type: 'SET_LOADING', payload: false }), 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" />
        </div>
      ) : (
        list?.map((el, i) => {
          return <DriverBox key={el.id} el={el} />;
        })
      )}
    </>
  );
};

export default Nearest;
