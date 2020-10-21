// Core
import cx from 'classnames';

export const getStyles = (state) => {
    return {
        latestFilter: cx('filter', {
            selectedFilter: state.selectedFilter === 'latest',
        }),
        upcomingFilter: cx('filter', {
            selectedFilter: state.selectedFilter === 'upcoming',
        }),
        popularFilter: cx('filter', {
            selectedFilter: state.selectedFilter === 'popular',
        }),
        sortButton: cx({
            desc: state.sortCriteria === 'desc',
        }),
    };
};
