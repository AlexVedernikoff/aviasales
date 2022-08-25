import { format, intervalToDuration } from 'date-fns';

export const declensionOfName = (num) => {
    const textForms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
    let form = '';
    if (num >= 4 || num ===0) form += textForms[2];
    if (num > 1 && num <= 4) form += textForms[1];
    if (num === 1) form += textForms[0];
    return `${num} ${form}` ;
};

export const formatFligthDate = (date, duration) => {
    const dur = intervalToDuration({
        start: new Date(date),
        end: new Date(new Date(date).getTime() + duration * 60000),
    });
    const minutes = dur.minutes === 0 ? '' : `${dur.minutes}M`;
    return `${dur.hours}Ч ${minutes}`;
};

export function TransferTime(data, duration) {
    const startDate = format(new Date(data), 'HH:mm');
    const endDate = format(new Date(new Date(data).getTime() + duration * 60000), 'HH:mm');
    return `${startDate} - ${endDate}`;
}

export const formatPrice = (number) => {
    const curSTr = number.toString();
    return `${curSTr.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')} Р`;
};

export const formatTime = (time) => {
    return `${Math.trunc(time / 60)}ч ${time % 60}м`;
};