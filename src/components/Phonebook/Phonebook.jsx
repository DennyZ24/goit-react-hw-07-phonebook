import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/store';
import s from "components/Phonebook/Phonebook.module.css";

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact] = useAddContactMutation();

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addContact({ name, phone });

      toast.success('Контакт добавлен', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      })
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    reset();
  };

  const handleChange = ({currentTarget: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'phone':
        setPhone(value);
        break;
      
      default: return;
    }
 }

  return (
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Name

          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
      
        <label>
          Number

          <input
            className={s.input}
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button type='submit' className={s.button}>
          Add contact
        </button>
      </form>
  )
}

export default Phonebook;