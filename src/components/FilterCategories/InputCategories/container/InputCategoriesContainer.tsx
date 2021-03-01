import React, { useState } from 'react';
import InputCategories from '../InputCategories.component'
import { useDispatch } from 'react-redux';
import { addTag } from '../../../../redux/actions/tag';

const InputCategoriesContainer: React.FC = () => {
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();

  const onSubmitTag = (e: React.FormEvent) => {
    e.preventDefault()
    if (tag !== '') {
      dispatch(addTag(`# ${tag}`));
      setTag('');
    };
  };

  return <InputCategories
    onSubmitTag={onSubmitTag}
    tag={tag}
    setTag={setTag}
  />;
}

export default InputCategoriesContainer;