import { useGetContactsQuery } from 'redux/store';
import { Oval } from 'react-loader-spinner';
import { filterContacts } from 'components/helpers/filterContacts';

import s from 'components/ContactsList/ContactsList.module.css'
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactsBook({filter}) {
  const { contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: ({data, isFetching}) => ({
      contacts: data && filterContacts(data, filter),
      isFetching
    })
  });

  return (
    <>
      
      {contacts && contacts.length === 0 && <p>Контакт не найден</p>}

      {contacts &&
        <ul className={s.list}>
          {contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
        </ul>}
      
      {isFetching && <Oval color="#00FFFF" height={40} width={40} />}
    </>
  )
}