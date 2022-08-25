import { connect } from 'react-redux';
import { v4 } from 'uuid';

import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

function TicketList({ tickets, viewTickets, filtersButton, transfersItems }) {
    const sortButton = filtersButton.find((el) => el.isActive).name;

    const selectedTransfers = transfersItems.map((item) => (item.isCheck ? Number(item.name) : null))
        .filter((el) => el !== null);

    const newTickets = tickets.map((el) => {
        const sumMin = el.segments[0].duration + el.segments[1].duration;
        el.sumMin = sumMin;
        const sumMinAndPrace = el.sumMin + el.price;
        el.sumMinAndPrace = sumMinAndPrace;
        return el;
    });

    const sorting = (arr, name) => {
        switch (name) {
            case 'cheap':
                arr.sort((a, b) => (a.price > b.price ? 1 : -1));
                break;
            case 'faster':
                arr.sort((a, b) => (a.sumMin > b.sumMin ? 1 : -1));
                break;
            case 'optimal':
                arr.sort((a, b) => (a.sumMinAndPrace > b.sumMinAndPrace ? 1 : -1));
                break;
            default:
                return [];
        }
        return arr;
    };
    const filtrationArr = newTickets.filter((item) => {
        const countTransfersThere = item.segments[0].stops.length;
        const countTransfersBack = item.segments[1].stops.length;
        if (selectedTransfers.includes(countTransfersThere) && selectedTransfers.includes(countTransfersBack)) {
            return item;
        } else return null;
    });
    if (!filtrationArr.length) {
        return (
            <div className='not-found'>Рейсов, подходящих под заданные фильтры, не найдено</div>
        );
    } else {
        return sorting(filtrationArr, sortButton).slice(0, viewTickets).map((el) => {
            return <Ticket key={v4()} el={el} />;
        });
    }
}

function mapStatetoProps(state) {
    return {
        tickets: state.ticketsReducer.tickets,
        filtersButton: state.ticketsReducer.filtersButton,
        transfersItems: state.ticketsReducer.transfersItems,
        viewTickets: state.ticketsReducer.viewTickets,
    };
}

export default connect(mapStatetoProps)(TicketList);