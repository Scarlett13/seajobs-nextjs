import React, { Fragment, useEffect, useState } from "react";

import { useUser } from "../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import ProfileSectionLayout from "../../components/layouts/profilesectionlayout/ProfileSectionLayout";
import { Listbox } from "@headlessui/react";
import Input from "../../components/inputs/reguler/InputTemplate";
import { Button, PopperPlacementType } from "@mui/material";
import DropdownInput from "../../components/inputs/dropdowninput/DropdownInput";

interface IPerson {
  id: number;
  name: string;
}
const people: IPerson[] = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
  { id: 11, name: "Durward Reynolds" },
  { id: 21, name: "Kenton Towne" },
  { id: 31, name: "Therese Wunsch" },
  { id: 41, name: "Benedict Kessler" },
  { id: 51, name: "Katelyn Rohan" },
  { id: 12, name: "Durward Reynolds" },
  { id: 22, name: "Kenton Towne" },
  { id: 32, name: "Therese Wunsch" },
  { id: 42, name: "Benedict Kessler" },
  { id: 52, name: "Katelyn Rohan" },
];

const fixedInputClass =
  "bg-black appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm text-left";

export function IdentitasDiriSection({
  selectedPeople,
  setSelectedPeople,
}: {
  selectedPeople: IPerson[];
  setSelectedPeople: React.Dispatch<React.SetStateAction<IPerson[]>>;
}) {
  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <Listbox.Label className={"text-white mb-2"}>
        Bidang Keahlian:
      </Listbox.Label>
      <Listbox.Button className={fixedInputClass}>
        {selectedPeople.length > 0
          ? selectedPeople
              .map((person: { name: string }) => person.name)
              .join(", ")
          : "Silahkan pilih bidang keahlian terlebih dahulu"}
      </Listbox.Button>
      <Listbox.Options className={fixedInputClass}>
        {people.map((person) => (
          <Listbox.Option key={person.id} value={person}>
            {selectedPeople.find((e: { id: number }) => e.id === person.id) ? (
              <a className="mr-2 text-bold text-form-section-blue">x</a>
            ) : (
              <a className="mr-2 text-bold text-form-section-blue">+</a>
            )}
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default function Dashboard() {
  const push = usePush();
  // const { user, redirectTo, authenticated } = useAuth();
  const { user, authenticated, setUser, setAuthenticated } = useUser();
  const [selectedPeople, setSelectedPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    console.log("user effect login: ", user);
    console.log("auth effect login: ", authenticated);
    if (!authenticated) {
      // push("/login");
    }
  }, [user, authenticated]);

  return (
    // <PrimaryLayout user={user}>
    //   <main classNameName="bg-gray-200 h-screen flex flex-col items-center justify-center">
    //     <p classNameName="text-xl mb-4">
    //       {/* Welcome, your email is {user.attributes.email} */}
    //     </p>

    //     <button
    //       classNameName="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
    //       onClick={async () => {
    //         await Auth.signOut();
    //         setUser(null);
    //         setAuthenticated(false);
    //       }}
    //     >
    //       Log out
    //     </button>
    //   </main>
    // </PrimaryLayout>
    <ProfileSectionLayout isRequired={true} title="data diri">
      <IdentitasDiriSection
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
      />
    </ProfileSectionLayout>
  );
}

Dashboard.authenticate = false;
