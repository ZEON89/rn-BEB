// @flow

import {DECREASE_COUNT, INCREASE_COUNT} from '../../Redux';

const increaseCount = () => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT,
  });
};

const decreaseCount = (count) => (dispatch) => {
  dispatch({
    type: DECREASE_COUNT,
    data: count
  });
};

export {increaseCount, decreaseCount};