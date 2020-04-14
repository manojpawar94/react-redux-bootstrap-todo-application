import { connect } from 'react-redux';
import LinkComponent from '../components/LinkComponent';
import { setVisibilityFilter } from '../actions/TodoActions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkComponent);

export default FilterLink;