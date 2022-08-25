import { useSelector } from 'react-redux';
import './Spinner.scss';

function Spinner() {
    const spin = useSelector(state => state.loaderReducer.loading);
    return spin ? (
        <div className="spinner">
            <div className="spinner-text">
                Загружаем билеты...
            </div>
            <div className="spinner-loader">
                <div className="loader">    
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
            
        </div>
    ) : null;
}


// function Spinner() {
//     const spin = useSelector(state => state.loaderReducer.loading);
//     return (
//         <div className='spinner-styles'>
//             Загружаем билеты...
//             <TailSpin
//                 color='#00BFFF'
//                 height={80}
//                 width={80}
//                 visible={spin}
//             />
//         </div>
//     );
// }

export default Spinner;