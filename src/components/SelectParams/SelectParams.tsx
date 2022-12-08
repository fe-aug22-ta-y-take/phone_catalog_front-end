import { useState, useCallback, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

import Select from 'react-select';

import { SelectOption } from '../../types/SelectOption';

import s from './SelectParams.module.scss';
import './CustomSelect.scss';

type Props = {
  optionsSorting: SelectOption[],
  optionsCount: SelectOption[],
  selectLimit: string,
  selectSort: string,
  setSelectLimit: (limit: string) => void,
  setSelectSort: (limit: string) => void,
  setSorting: (order: string, dir: string) => void,
};

export const SelectParams: React.FC<Props> = ({
  optionsSorting,
  optionsCount,
  selectLimit,
  setSelectLimit,
  selectSort,
  setSelectSort,
  setSorting,
}) => {
  const [selectSorting, setSelectSorting] = useState(selectSort);
  const [selectCount, setSelectCount] = useState(selectLimit);

  // const [searchParams, setSeatchParams] = useSearchParams();

  // const quantity = searchParams.get('quantity');
  // const sorting = searchParams.get('sorting');

  const setSelect = (sort: string) => {
    switch (sort) {
      case 'ascPrice':
        setSorting('price', 'asc');
        break;

      case 'descPrice':
        setSorting('price', 'desc');
        break;

      case 'ascYear':
        setSorting('new', 'asc');
        break;

      case 'descYear':
        setSorting('new', 'desc');
        break;

      case 'default':
      default:
        setSorting('', '');
    }
  };

  useEffect(() => {
    setSelect(selectSorting);
  }, [selectSorting]);

  const getValueSorting = useCallback(() => {
    return selectSorting
      ? optionsSorting.find(sort => sort.value === selectSorting)
      : '';
  }, [selectSorting]);

  const handleChangeSorting = useCallback((newValue: any) => {
    setSelectSorting(newValue.value);
    setSelectSort(newValue.value);
    // setSeatchParams({ sorting: newValue.value });
  }, [selectSorting]);

  const getValueCount = useCallback(() => {
    return selectCount
      ? optionsCount.find(count => count.value === selectCount)
      : 0;
  }, [selectCount]);

  const handleChangeCount = useCallback((newValue: any) => {
    setSelectCount(newValue.value);
    setSelectLimit(newValue.value);
    // setSeatchParams({ quantity: newValue.value });
  }, [selectCount]);

  return (
    <ul className={s.select__list}>
      <li className={s.select__item}>
        <h4 className={s.select__title}>Sort by</h4>

        <Select
          className={s.select__container_sort}
          classNamePrefix="custom_select"
          options={optionsSorting}
          value={getValueSorting()}
          onChange={handleChangeSorting}
          isSearchable={false}
        />
      </li>

      <li className={s.select__item}>
        <h4 className={s.select__title}>Items on page</h4>

        <Select
          className={s.select__container_count}
          classNamePrefix="custom_select"
          options={optionsCount}
          value={getValueCount()}
          onChange={handleChangeCount}
          isSearchable={false}
        />
      </li>
    </ul>
  );
};
