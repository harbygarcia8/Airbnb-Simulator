import "../styles/Filters.scss";
import { INITIAL_ICONS, LinksIcons } from "../models/icons.filter";
import React, { useEffect, useState } from "react";
import { TuneSharp } from "@mui/icons-material";
import { Button } from "@mui/material";

function Filter() {
  const [icons, setIcons] = useState<Array<LinksIcons>>([]);
  const [selectedIcon, setSelectedIcon] = useState<number>(0);

  useEffect(() => {
    setIcons(INITIAL_ICONS);
  }, []);

  return (
    <section className="section-filter" >
      <div className="filter-div">
        {icons.map((item) => (
          <div
            key={item.id}
            className={`links-box ${
              item.id === selectedIcon && "selected-box"
            }`}
            onClick={() => {
              setSelectedIcon(item.id);
            }}
          >
            <img src={item.imgSrc} alt={item.label} className="links-img" />
            <p
              className={`links-label ${
                item.id === selectedIcon && "selected-label"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <Button className="filter-bar">
        <div>
        <TuneSharp /> 
        Filtros
        </div>
      </Button>

    </section>
  );
}

export default Filter;
