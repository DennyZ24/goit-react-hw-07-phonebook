import { useDeleteContactMutation } from 'redux/store';
import s from 'components/ContactItem/ContactItem.module.css'

export default function ContactItem({ contact }) {
  const { id, phone, name } = contact;

  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <li className={s.item}>
            {name}: {phone}
            <button
              type='button'
              className={s.button}
              onClick={()=>deleteContact(id)}
            >
              {isLoading ? 'Deliting...' : 'Delete'}
            </button>
          </li>
  )
}