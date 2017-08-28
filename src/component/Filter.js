import React from 'react';
import {Dropdown} from 'semantic-ui-react';

const FiltreOption = [
  {
    text: 'DONE',
    value: 'DONE',
  },
  {
    text:'TO DO',
    value: 'TODO',
  },
  {
    text:'ALL',
    value:'ALL',
  }
]

const Filter = ( {onChangeFilter} ) => (
  <Dropdown onChange={onChangeFilter}  placeholder="Filtres" selection options={FiltreOption} />
)

export default Filter;
