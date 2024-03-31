import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { Person2Outlined, FavoriteIcon , RestoreIcon} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState<number>(0)

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recientes" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="IniciarSesion" icon={<Person2Outlined />} />
      </BottomNavigation>
    </div>
  );
}
