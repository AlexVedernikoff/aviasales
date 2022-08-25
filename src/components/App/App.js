import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { showMoreTickets, searchId } from '../../redux/actionCreators';
import Spinner from '../Spinner/Spinner';
import Filters from '../Filters/Filters';
import Transfers from '../Transfers/Transfers';
import TicketList from '../TicketList/TicketList';
import logo from '../../img/Logo.svg';

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchId());
    }, []);

    const error = useSelector(state => state.errorReducer.error);
    return (
        <div className="app">
            {error && (
                <div className='error-message'>{error}</div>
            )}
            <header className='app__header'>
                <img src={logo} alt='logo' />
            </header>
            <main className='app__main'>
                <Transfers />
                <Spinner />
                <Filters />
                <div className='tickets'>
                    <TicketList />
                </div>
                <button className='show__tickets' onClick={() => props.handleShowMoreTickets()}>Показать еще 5 билетов!</button>
            </main>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        handleShowMoreTickets: () => dispatch(showMoreTickets())
    };
};

export default connect(null, mapDispatchToProps)(App);
