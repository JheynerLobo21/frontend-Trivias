import PropTypes from 'prop-types';
import '../../css/wildcard.css'
export function Wildcard({ wildcard }) {
    return (
        <aside className='icon-header'>
            <i className={`${wildcard.wildcard.icon} icon`}></i>
            <i className="cantidad" style={{ backgroundColor: wildcard.amount === 0 ? 'red' : '' }}>
                {wildcard.amount === 0 ? '+' : wildcard.amount}
            </i>
        </aside>
    );
}

Wildcard.propTypes = {
    wildcard: PropTypes.shape({
        wildcard: PropTypes.shape({
            icon: PropTypes.string.isRequired,
        }).isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired,
};
