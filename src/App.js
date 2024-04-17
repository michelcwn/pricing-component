import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <PricingPage />
    </div>
  );
}

function PricingPage() {
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  return (
    <>
      <Header
        isYearlyBilling={isYearlyBilling}
        setIsYearlyBilling={setIsYearlyBilling}
      />
      <Main isYearlyBilling={isYearlyBilling} />
    </>
  );
}

function Header({ isYearlyBilling, setIsYearlyBilling }) {
  return (
    <header className="header">
      <h1 className="header__title">Our Pricing</h1>
      <ToggleBtn
        isYearlyBilling={isYearlyBilling}
        setIsYearlyBilling={setIsYearlyBilling}
      />
    </header>
  );
}

function Main({ isYearlyBilling }) {
  return (
    <main className="main">
      <CardBasic isYearlyBilling={isYearlyBilling} />
      <CardPro isYearlyBilling={isYearlyBilling} />
      <CardMaster isYearlyBilling={isYearlyBilling} />
    </main>
  );
}

function ToggleBtn({ isYearlyBilling, setIsYearlyBilling }) {
  return (
    <div className="billing-toggle">
      <span className="billing-toggle__option yearly">Annualy</span>

      <label className="billing-toggle__switch switch">
        <input
          type="checkbox"
          checked={isYearlyBilling}
          onChange={() => setIsYearlyBilling(!isYearlyBilling)}
          className="billing-toggle__checkbox"
        />
        <span className="billing-toggle__slider slider round"></span>
      </label>
      <span className="billing-toggle__option monthly">Montly</span>
    </div>
  );
}

function CardBasic({ isYearlyBilling }) {
  return (
    <div className="card card--basic">
      <p className="card__tier">Basic</p>
      <p className="card__price"> {isYearlyBilling ? "$199.99" : "$19.99"} </p>
      <ul className="card__features">
        <li className="card__feature">500 GB Storage</li>
        <li className="card__feature">2 Users Allowed</li>
        <li className="card__feature">Send up to 3 GB</li>
      </ul>
      <button className="button card__button">Learn More</button>
    </div>
  );
}
function CardPro({ isYearlyBilling }) {
  return (
    <div className="card card--pro">
      <p className="card__tier">Professional</p>
      <p className="card__price"> {isYearlyBilling ? "$249.99" : "$24.99"} </p>
      <ul className="card__features">
        <li className="card__feature">1 TB Storage</li>
        <li className="card__feature">5 Users Allowed</li>
        <li className="card__feature">Send up to 10 GB</li>
      </ul>
      <button className="button card__button">Learn More</button>
    </div>
  );
}
function CardMaster({ isYearlyBilling }) {
  return (
    <div className="card card--master">
      <p className="card__tier">Master</p>
      <p className="card__price"> {isYearlyBilling ? "$399.99" : "$39.99"} </p>
      <ul className="card__features">
        <li className="card__feature">2 TB Storage</li>
        <li className="card__feature">10 Users Allowed</li>
        <li className="card__feature">Send up to 20 GB</li>
      </ul>
      <button className="button card__button">Learn More</button>
    </div>
  );
}
