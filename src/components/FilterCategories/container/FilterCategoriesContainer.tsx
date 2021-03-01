import React from 'react';
import FilterCategories from '../FilterCategories.component';
import { useDispatch } from 'react-redux';
import { removeTag } from '../../../redux/actions/tag';
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const FilterCategoriesContainer: React.FC = () => {
  const tagArr = useTypedSelector(({ tags }) => tags.tagArr);
  const count = useTypedSelector(({ tags }) => tags.count);
  const dispatch = useDispatch();

  const onClickRemoveTag = (tagName: string) => {
    dispatch(removeTag(tagName))
  };

  return (
    <FilterCategories
      count={count}
      tagArr={tagArr}
      onClickRemoveTag={onClickRemoveTag} />
  );
}

export default FilterCategoriesContainer;

