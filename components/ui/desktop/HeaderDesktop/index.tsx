import LogoDesktop from '../LogoDesktop';
import CategoriesToggle from '../CategoriesToggle';
import SearchBar from '../../common/SearchBar';
import CustomerAuth from '../CustomerAuth';
import CartInfo from '../CartInfo';
import HeaderMiddle from '../HeaderMiddle';
import HeaderTop from '../HeaderTop';

const HeaderDesktop = () => {
  
  return (
    <header className="bg-white shadow-md">
        <HeaderTop />
        <HeaderMiddle>
              <LogoDesktop />
              <CategoriesToggle />
              <SearchBar />
              <CustomerAuth />
              <CartInfo />
        </HeaderMiddle>
    </header>
  );
};

export default HeaderDesktop;

