import { connect } from 'react-redux';

import { updateSorting } from '../../redux/actionCreators';
import './Filters.scss';

function Filters({ filtersButton, updateSorting }) {
    const buttons = filtersButton.map(({ name, label, isActive }) => {
        let className;

        if (isActive) {
            className = 'filters__filter filter__clicked';
        } else className = 'filters__filter';

        const onClick = () => {
            const newArr = [...filtersButton].map((el) => {
                if (el.name === name) {
                    el.isActive = true;
                } else {
                    el.isActive = false;
                }
                return el;
            });
            updateSorting(newArr);
        };
        return (
            <div key={name} className={className} onClick={onClick}>
                {label}
            </div>
        );
    });
    return (
        <div className='filters'>
            {buttons}
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        filtersButton: state.ticketsReducer.filtersButton,
    };
}

const mapDispathToProps = (dispatch) => ({
    updateSorting: (newSortButtons) => dispatch(updateSorting(newSortButtons)),
});

export default connect(mapStatetoProps, mapDispathToProps)(Filters);