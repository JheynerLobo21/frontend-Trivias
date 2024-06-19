import PropTypes from 'prop-types';
import '../../css/subcategories.css';


export const DescryptionSubcategory = ({ btnSubcategory }) => {
    console.log(btnSubcategory)
    const category = JSON.parse(localStorage.getItem("category"))
    let subcategory="";
    let primera= true;
    if(Object.entries(btnSubcategory).length!=0){
        primera = false;
    }
    if(!primera)
    subcategory=btnSubcategory.name.replace(/ /g, "-");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            dificultad: document.getElementById("type-dificults").value,
            idSubCategory: btnSubcategory.idSubCategory
        };
        localStorage.setItem("data", JSON.stringify(data));
        window.location.href=`/categories/${category.name}/${subcategory}`;
    };

    return (
        <section>
            <h2 className='title-subcategory'>{!primera?btnSubcategory.name:""}</h2>
            <div className='description-img'>
                <img src="" alt="" className="img-carrusel"/>
                <p className='description-subcategory'>{!primera?btnSubcategory.description:""}</p>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                    <p>Selecciona una dificultad de juego</p>
                    <div className='options-dificult'>
                        <select name="dificult" id="type-dificults" required>
                            <option value="">Seleccione...</option>
                            <option value="1">Simio</option>
                            <option value="2">Humano</option>
                            <option value="3">Alien</option>
                        </select>
                        <button type='submit'>Empezar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

DescryptionSubcategory.propTypes = {
    btnSubcategory:PropTypes.shape({
        name: PropTypes.string,
        description:PropTypes.string,
        replace:PropTypes.string,
        idSubCategory:PropTypes.number,
      }).isRequired,
  };
