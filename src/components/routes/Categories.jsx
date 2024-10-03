import "../../index.css";
//import { Sidebar } from "../navigation/Sidebar";
import { Navigation } from "../navigation/Navigation";
import { ContainerCards } from "../ui/home/ContainerCards.jsx";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { CardInformation } from "../cards/CardInformation";
import { Filter } from "../navigation/Filter.jsx";
("use client");
import { Drawer } from "flowbite-react";
import { useState } from "react";
import propTypes from "prop-types";
import useFetchData from "../hooks/useFetchData.js";

export function Categories({ toggleDarkMode }) {
  const { isMobile } = useFetchMenubar();
  const { data: categories, loading: loadingCategories } = useFetchData(
    "http://localhost/escape-desarrollo-backend/public/api/categories"
  );
  const [category, setCategory] = useState(null);
  const [district, setDistrict] = useState(null);
  const { data: cantons, loading: loadingCantons } = useFetchData(
    "http://localhost/escape-desarrollo-backend/public/api/canton"
  );
  console.log(cantons);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const [id, setId] = useState(0);

  const openCard = (id) => () => {
    setIsOpen(true);
    console.log(id);
    setId(id);
  };
  const fetchCategory = async (url, isCategory) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (isCategory == true) {
        setCategory(result);
      } else {
        setDistrict(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const setsubcategories = (id) => () => {
    fetchCategory(
      `http://localhost/escape-desarrollo-backend/public/api/subcategories/${id}`,
      true
    );
  };

  const setdistrict = (id) => {
    console.log("setdistrict");
    console.log(id);
    fetchCategory(
      `http://localhost/escape-desarrollo-backend/public/api/district/${id}`,
      false
    );
  };

  return (
    <div className=" dark:bg-[#2a2a2a]">
      <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
        <Navigation darkMode={toggleDarkMode} />
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-full md:w-1/2 lg:w-1/3 dark:bg-[#2a2a2a]"
      >
        <Drawer.Items>
          <CardInformation id={id} onClose={handleClose} />
        </Drawer.Items>
      </Drawer>
      <div className="grid justify-between grid-cols-[auto_auto]">
        <main
          className="flex flex-col lg:pl-12 px-5 overflow-x-hidden transition-all duration-500 mb-4"
          style={{
            marginLeft: isMobile ? "0px" : "80px",
          }}
        >
          <div className="flex pt-4 justify-between">
            <h1 className="font-black dark:text-white text-3xl lg:text-4xl mt-2">
              ESCAPE
            </h1>
          </div>
          <div className="mt-10">
            <h2 className="font-bold md:text-2xl text-xl mb-8 dark:text-white">
              Recomendaciones
            </h2>
            <ContainerCards setIsOpen={openCard} />
          </div>
        </main>
        {!loadingCategories && !loadingCantons ? (
          <Filter
            categories={categories}
            setsubcategories={setsubcategories}
            subcategories={category}
            canton={cantons}
            district={district}
            setdistrict={setdistrict}
          />
        ) : (
          <p value="">loading</p>
        )}
      </div>
    </div>
  );
}

Categories.propTypes = {
  toggleDarkMode: propTypes.func,
  darkMode: propTypes.bool,
};
