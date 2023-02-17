import { Listbox } from "@headlessui/react";
// import { useState } from "react";
import { IBidangKeahlian } from "../../../constants/profileformconstants/ProfileFormConstants";
import { IIdentitasDiri } from "../../sections/profileformsection/identitasdiri/IdentitasDiri";
// import styles from "./BidangKeahlianInput.module.css";

export interface IBidangKeahlianInput {
  selectedKeahlian: IBidangKeahlian[];
  setSelectedKeahlian: React.Dispatch<React.SetStateAction<IBidangKeahlian[]>>;
}

const BidangKeahlianInput: React.FC<IIdentitasDiri> = ({
  selectedKeahlian,
  setSelectedKeahlian,
}) => {
  const fixedInputClass =
    "bg-black appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm text-left";

  const dataKeahlian: IBidangKeahlian[] = require("../../../../constants/profileformconstants/bidang_keahlian.json");
  console.log(selectedKeahlian);

  return (
    <Listbox value={selectedKeahlian} onChange={setSelectedKeahlian} multiple>
      <Listbox.Label className={"text-white mb-2"}>
        Bidang Keahlian:
      </Listbox.Label>
      <Listbox.Button className={fixedInputClass}>
        {selectedKeahlian.length > 0
          ? selectedKeahlian
              .map((keahlian) =>
                keahlian.iscollapsible
                  ? keahlian.subcategoryname
                  : keahlian.categoryname
              )
              .join(", ")
          : "Silahkan pilih bidang keahlian terlebih dahulu"}
      </Listbox.Button>
      <Listbox.Options className={fixedInputClass}>
        {dataKeahlian.map((keahlian) => (
          <Listbox.Option
            className={`my-1.5 ${
              keahlian.iscollapsible ? "text-blue-400" : "text-yellow-300"
            }`}
            key={
              keahlian.iscollapsible
                ? keahlian.subcategoryname
                : keahlian.categoryname
            }
            value={keahlian}
          >
            {selectedKeahlian.find(
              (e: { id: number }) => e.id === keahlian.id
            ) ? (
              <a className="mr-2 text-bold text-form-section-blue">x</a>
            ) : (
              <a className="mr-2 text-bold text-form-section-blue">+</a>
            )}
            {keahlian.iscollapsible
              ? keahlian.subcategoryname
              : keahlian.categoryname}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default BidangKeahlianInput;
