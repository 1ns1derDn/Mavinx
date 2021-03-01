import React, { useState } from 'react';
import {
  RangeCostStyled,
  StyledSlider,
  StyledThumb,
  StyledTrack,
  RangePriceView,
  RangeCostTop
} from './RangeCost.styled';
import Select from '../Select/Select.component';

const Thumb = (props: any, state: any) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

const RangeCost: React.FC = () => {

  const [value, setValue] = useState<any>([2500, 5000]);

  return (
    <RangeCostStyled>
      <RangeCostTop>
        <Select />
        <RangePriceView>От &nbsp; {value[0]}</RangePriceView>
        <RangePriceView>До &nbsp; {value[1]}</RangePriceView>
      </RangeCostTop>
      <StyledSlider
        value={value}
        max={50000}
        onChange={(val) => setValue(val)}
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </RangeCostStyled>
  );
};

export default RangeCost;