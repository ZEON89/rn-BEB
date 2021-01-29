import {connect} from 'react-redux';
import DetailScreen from './Detail.screen.component';

const mapStateToProps = (state) => ({
  count: state.home_store.count || 0,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseCount()),
  decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);