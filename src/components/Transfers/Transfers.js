import { connect } from 'react-redux';

import { updateTransfers } from '../../redux/actionCreators';
import './Transfers.scss';

function Transfers({ transfersItems, updateTransfers }) {
    let countFilters = 0;

    const filters = [...transfersItems].map(({ label, name, isCheck }) => {
        if (isCheck) {
            countFilters += 1;
        }

        const onChange = (event) => {
            const newArrFilters = [...transfersItems];

            if (name === 'all' && isCheck === false) {
                newArrFilters.map((el) => {
                    el.isCheck = true;
                    return el;
                });
            }

            if (name === 'all' && isCheck === true) {
                newArrFilters.map((el) => {
                    el.isCheck = false;
                    return el;
                });
            }

            if (name !== 'all') {
                newArrFilters.map((el) => {
                    if (el.name === name) {
                        el.isCheck = event.target.checked;
                        if (!event.target.checked) {
                            countFilters -= 1;
                        }
                    }
                    if (el.name === 'all') {
                        el.isCheck = false;
                    }
                    return el;
                });
            }

            if (countFilters === 3 && name !== 'all') {
                newArrFilters.map((el) => {
                    el.isCheck = true;
                    return el;
                });
            }
            updateTransfers(newArrFilters);
        };
        return (
            <label key={name}>
                <input type='checkbox' checked={isCheck}
                    onChange={onChange} className='input hidden' />
                <span className='checker' />
                {label}
            </label>
        );
    });

    return (
        <div className='transfers'>
            <h3>Количество пересадок</h3>
            <form>{filters}</form>
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        transfersItems: state.ticketsReducer.transfersItems,
    };
}

const mapDispathToProps = (dispatch) => ({
    updateTransfers: (newTransfers) => dispatch(updateTransfers(newTransfers)),
});

export default connect(mapStatetoProps, mapDispathToProps)(Transfers);