import { Listbox } from "@headlessui/react";
import { useState } from "react";
import styles from "./DropdownInput.module.css";

export interface IDropdownInput {
  sampleTextProp: string;
}

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const fixedInputClass =
  "bg-black rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm";

const DropdownInput: React.FC<IDropdownInput> = ({ sampleTextProp }) => {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <>
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <Listbox.Button className={fixedInputClass}>
          {selectedPeople.map((person) => person.name).join(", ")}
        </Listbox.Button>
        <Listbox.Options className={fixedInputClass}>
          {people.map((person) =>
            selectedPeople.find((e) => e.name === person.name) ? (
              <></>
            ) : (
              <Listbox.Option key={person.id} value={person}>
                {person.name}
              </Listbox.Option>
            )
          )}
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export default DropdownInput;
