import frontCard from "./images/bg-card-front.png";
import backCard from "./images/bg-card-back.png";
import { useRef, useState } from "react";

import Complete from "./Complete";
function App() {
  const inputNameRef = useRef(null);
  const inputCardNumberRef = useRef(null);
  const inputM_expRef = useRef(null);
  const inputY_expRef = useRef(null);
  const inputCvcRef = useRef(null);
  const [CardData, setCardData] = useState({
    cardNumber: "0000 0000 0000 0000",
    cardName: "Yossef Elshafey",
    cardMEXP: "00",
    cardYEXP: "00",
    cvc: "000",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  function setDataToCard(key, value) {
    // {card data key as string}
    setCardData({ ...CardData, [key]: value });
  }
  function fillSuccess(e) {
    e.preventDefault();
    setShowSuccess(!showSuccess);
  }
  return (
    <main>
      <span></span>
      <div className="relative  h-max p-4 xl:h-auto flex flex-col xl:justify-center xl:gap-y-4 items-baseline xl:items-normal ">
        <div className="relative order-1 xl:-order-1 bottom-12 xl:bottom-0 xl:max-w-fit mx-auto ">
          <img src={frontCard} alt="" className="w-4/5  xl:w-auto  " />
          <div className="colored-card-content  flex items-center absolute top-4 left-4">
            <span className="w-10 h-10 bg-white rounded-full inline-block"></span>
            <span className="w-6 h-6 ml-4 bg-transparent border rounded-full inline-block"></span>
          </div>
          <div className="absolute xl:bottom-20 bottom-10 left-4">
            <h2 className="xl:text-4xl text-2xl text-white">
              {CardData.cardNumber}
            </h2>
          </div>
          <div className="absolute bottom-4 left-0 flex justify-between w-2/3 xl:w-full px-4 ">
            <h3 className="text-white font-bold">{CardData.cardName}</h3>
            <div className="text-white">
              <span>{CardData.cardMEXP}/</span>
              <span>{CardData.cardYEXP}</span>
            </div>
          </div>
        </div>
        <div className="relative mx-auto xl:mx-0">
          <img
            src={backCard}
            alt=""
            className="w-4/5 ml-auto -order-1 xl:w-auto xl:mx-auto "
          />
          <p className="absolute text-white top-1/2 -translate-y-3 right-[20%] ">
            {CardData.cvc}
          </p>
        </div>
      </div>
      {!showSuccess ? (
        <form
          onSubmit={fillSuccess}
          name="credit-form"
          className="flex flex-col justify-between xl:justify-center xl:gap-y-4 relative p-2"
        >
          <label className="text-main">
            CARDHOLDER NAME
            <input
              ref={inputNameRef}
              onChange={() =>
                setDataToCard("cardName", inputNameRef.current.value)
              }
              name="card-owner"
              type="text"
              className="border p-2 rounded-xl outline-none hover:border-main block w-full "
              placeholder={CardData.cardName}
            />
          </label>
          <label className="text-main">
            CARD NUMBER
            <input
              ref={inputCardNumberRef}
              onChange={() =>
                setDataToCard("cardNumber", inputCardNumberRef.current.value)
              }
              maxLength={19}
              name="card-number"
              type="text"
              className="border p-2 rounded-xl outline-none hover:border-main block w-full"
              placeholder={CardData.cardNumber}
            />
          </label>
          <div className="grid grid-cols-3 items-center  ">
            <div className="max-w-fit">
              <label className="text-main">
                EXP . Month
                <input
                  ref={inputM_expRef}
                  onChange={() =>
                    setDataToCard("cardMEXP", inputM_expRef.current.value)
                  }
                  name="exp-m"
                  type="number"
                  className="border p-1 rounded-xl outline-none hover:border-main  "
                  placeholder="EXP MM"
                />
              </label>
            </div>
            <div className="max-w-fit">
              <label className="text-main">
                EXP . Year
                <input
                  ref={inputY_expRef}
                  onChange={() =>
                    setDataToCard("cardYEXP", inputY_expRef.current.value)
                  }
                  name="exp-y"
                  type="number"
                  className="border p-1 rounded-xl outline-none hover:border-main "
                  placeholder="EXP . YY"
                />
              </label>
            </div>
            <div className="max-w-fit">
              <label className="text-main block">
                CVC
                <input
                  ref={inputCvcRef}
                  onChange={() =>
                    setDataToCard("cvc", inputCvcRef.current.value)
                  }
                  name="cvc"
                  type="number"
                  className="border p-1 rounded-xl outline-none hover:border-main block"
                  placeholder="000"
                />
              </label>
            </div>
          </div>
          <button className="border p-2 bg-main text-white rounded-xl cursor-pointer">
            Confirm
          </button>
        </form>
      ) : (
        <Complete clickFunc={fillSuccess} />
      )}
    </main>
  );
}

export default App;
