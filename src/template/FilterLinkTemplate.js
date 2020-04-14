import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../constants/TodoConstant';


const FooterComponent = () => (
    <div>
        <span>Filter: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default FooterComponent;

/*
<ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton  value={1}>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            </ToggleButton>
            <ToggleButton  value={2}>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            </ToggleButton>
            <ToggleButton  value={3}>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </ToggleButton>
        </ToggleButtonGroup>
*/