import logo from "../assets/logo/logo-airbnb.png";
import "../styles/Header.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import SimpleBottomNavigation from "../components/Header/BottomNav";
import ProfileMenu from "../components/Header/ProfileMenu";
import MobileSearchBar from "../components/Header/MobileSearchBar";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Dónde</div>
        <div className="search-bar-text">Llegada</div>
        <div className="search-bar-text">Salida</div>
        <div className="search-bar-text2">Quién</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Pon tu espacio en Airbnb</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <ProfileMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
