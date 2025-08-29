import './searchForm.scss';

//images
import loupe from './search.svg';

const SearchForm = () => {
    return ( 
        <form action="" className="search-form">
            <input type="text" className="search-form__input" />
            <button className="search-form__btn">
                <img src={loupe} alt="" className="search-form__btn-img" />
            </button>
        </form>
     );
}
 
export default SearchForm;