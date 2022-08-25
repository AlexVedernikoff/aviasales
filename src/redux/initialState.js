export const initialState = {
    filtersButton: [
        { name: 'cheap', label: 'Самый дешевый', isActive: true },
        { name: 'faster', label: 'Самый быстрый', isActive: false },
        { name: 'optimal', label: 'Оптимальный', isActive: false },
    ],
    transfersItems: [
        { label: 'Все', name: 'all', isCheck: true },
        { label: 'Без пересадок', name: '0', isCheck: true },
        { label: '1 пересадка', name: '1', isCheck: true },
        { label: '2 пересадки', name: '2', isCheck: true },
        { label: '3 пересадки', name: '3', isCheck: true },
    ],
    loading: false,
    error: null,
    tickets: [],
    viewTickets: 5,
};