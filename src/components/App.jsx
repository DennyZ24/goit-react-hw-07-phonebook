import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import Section from "./Section/Section";
import Phonebook from "./Phonebook/Phonebook";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

export const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <Section title='Phonebook'>
        <Phonebook />
      </Section>
        
      <Section title='Contacts'>
        <ContactsList filter={filter}/>
      </Section>

      <Section>
        <Filter filterValue={filter} onFilterContact={setFilter}/>
      </Section>

      <ToastContainer/>
    </>
  );
};
