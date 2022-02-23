import React, { useContext, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Store } from '../../utils/Store';
import DriverBox from '../SectionNav/DriverBox';
const Past = ({ data }) => {
  const {
    state: { isLoading },
    dispatch,
  } = useContext(Store);
  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => dispatch({ type: 'SET_LOADING', payload: false }), 500);
  }, []);
  const today = new Date().getTime();

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" />
        </div>
      ) : (
        data
          .filter((el) => el.date < today)
          .map((el) => <DriverBox key={el.id} el={el} />)
      )}
    </>
  );
};

export default Past;
