import { useState } from "react";
import Header from "../containts/Header";
import Filter from "../containts/Filter";
function AirbnbPage() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <>
      <Header />
      <hr color="#EBEBEB" />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </>
  );
}

export default AirbnbPage;
