import s from "components/Filter/Filter.module.css";

export default function Filter({ filter, onFilterContact }) {

  return ( 
     <label>
      Search contact

      <input className={s.input} type='text' name='filer' value={filter} onChange={ (e) => onFilterContact(e.target.value)} />
    </label>
    
  )
}