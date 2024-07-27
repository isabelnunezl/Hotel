import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import home from "../assets/imagenes/home.svg";
import format from "date-fns/format";
import { calculatePrice } from "./Helper.js";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const HomePage = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [customerType, setCustomerType] = useState("regular");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const handleSearch = () => {
    try {
      // Llamar a calculatePrice para obtener el hotel con el precio más bajo
      const result = calculatePrice(
        range[0].startDate,
        range[0].endDate,
        customerType
      );
      // Establecer el hotel seleccionado basado en el resultado
      setSelectedHotel(result.hotel); // Asegúrate de que calculatePrice devuelva un objeto con una propiedad `hotel`
    } catch (error) {
      console.error("Error calculating price:", error);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleToggleChange = () => {
    setCustomerType((prevType) =>
      prevType === "regular" ? "rewards" : "regular"
    );
  };

  return (
    <>
      <section className="home" id="home">
        <div className="head_container">
          <div className="box">
            <div className="text">
              <h1>Encuentra tu hotel ideal al mejor precio!</h1>
            </div>
          </div>
          <div className="image">
            <img src={home} alt="inicio" />
          </div>
        </div>
      </section>
      <section className="book">
        <div className="container flex">
          <div className="input" id="buscador">
            <div className="box1">
              <label>Check-in - Check-out</label>
              <div className="calendarWrap">
                <input
                  value={`${format(
                    range[0].startDate,
                    "MM/dd/yyyy"
                  )} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                  readOnly
                  className="inputBox"
                  onClick={() => setOpen((open) => !open)}
                />
                <div ref={refOne}>
                  {open && (
                    <DateRange
                      onChange={(item) => setRange([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      className="calendarElement"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="box1">
              <label>Cliente</label>
              <div className="toggle">
                <input
                  type="checkbox"
                  id="customer-type"
                  checked={customerType === "rewards"}
                  onChange={handleToggleChange}
                />
                <label htmlFor="customer-type"></label>
                <div className="toggle-text on">Rewards</div>
                <div className="toggle-text off">Regular</div>
              </div>
            </div>
          </div>
          <div className="search">
            <input
              type="button"
              onClick={handleSearch}
              value="BUSCAR"
              id="find-hotel-btn"
            />
          </div>
        </div>
      </section>
      <section className="room top" id="room">
        {selectedHotel && (
          <div className="contenido">
            <div className="heading">
              <h2>La mejor opción para ti</h2>
            </div>
            <div className="text">
              <h3>{selectedHotel.name}</h3>
              <p>Calificación: {"★".repeat(selectedHotel.rating)}</p>
              <p>
                Precio Total: $
                {
                  calculatePrice(
                    range[0].startDate,
                    range[0].endDate,
                    customerType
                  ).total
                }
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;
