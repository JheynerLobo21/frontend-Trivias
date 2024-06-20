import PropTypes from 'prop-types';
import '../../css/wildcard.css'
import { restarComodin } from '../../services/Wildcard';

export function Wildcard({ wildcard,funcionalidad,comodinUse }) {

    const handleClick = async () => {
        if(parseInt(wildcard.amount)>0){
            let used=funcionalidad()
            let status='';
            used?console.log("No se puede usar"):status=await restarComodin(wildcard.idUserWildcard);
            status===204?comodinUse():'';
            console.log(204)

        }else{
            alert("no tienes comodines")
        }
    };

    return (
        <aside onClick={() => handleClick()} className='icon-header'>
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
