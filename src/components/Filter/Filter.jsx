import { useDispatch, useSelector } from 'react-redux';
// import React from 'react';
import { filterContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const target = e.target.value;
    const normalizedFilter = target.toLowerCase().trim();
    dispatch(filterContacts(normalizedFilter));
  };
  // console.log(value);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        autoComplete="on"
        onChange={changeFilter}
        placeholder="Enter name"
      />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
