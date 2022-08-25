import { formatPrice, formatTime, TransferTime, declensionOfName } from '../../utils/FormattingData';
import './Ticket.scss';

function Ticket({ el}) {
    const __imageBase = 'https://pics.avs.io/99/36/'; // eslint-disable-line
    const airLogo = el.carrier ? `${__imageBase}${el.carrier}.png` : null;
    return (
        <div className='ticket'>
            <div className='ticket__header'>
                <div className='ticket__price'>{formatPrice(el.price)}</div>
                <img src={airLogo} alt='logo avia company'></img>
            </div>
            <div className='ticket__info'>
                <div className='ticket__path'>
                    <p className='ticket__item'>{el.segments[0].origin} - {el.segments[0].destination}</p>
                    <p>{TransferTime(el.segments[0].date, el.segments[0].duration)}</p>
                </div>
                <div className='ticket__time'>
                    <p className='ticket__item'>В пути</p>
                    <p className='ticket__hours'>{formatTime(el.segments[0].duration)}</p>
                </div>
                <div className='ticket__transfers'>
                    <p className='ticket__item'>{declensionOfName(el.segments[0].stops.length)} </p>
                    <p>{el.segments[0].stops.join(', ')}</p>
                </div>
            </div>
            <div className='ticket__info'>
                <div className='ticket__path'>
                    <p className='ticket__item'>{el.segments[1].origin} - {el.segments[1].destination}</p>
                    <p>{TransferTime(el.segments[1].date, el.segments[1].duration)}</p>
                </div>
                <div className='ticket__time'>
                    <p className='ticket__item'>В пути</p>
                    <p className='ticket__hours'>{formatTime(el.segments[1].duration)}</p>
                </div>
                <div className='ticket__transfers'>
                    <p className='ticket__item'>{declensionOfName(el.segments[1].stops.length)}</p>
                    <p>{el.segments[1].stops.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;