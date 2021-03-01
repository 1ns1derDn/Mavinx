import styled from 'styled-components';
import ReactSlider from 'react-slider'

export const RangeCostStyled = styled.div`
  padding: 1.25rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.backgroundList};
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 2px;
`;

export const RangeCostTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledThumb = styled.div`
    top: -4px;
    height: 10px;
    line-height: 1.5625rem;
    width: 10px;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.sliderRange.track};
    border-radius: 50%;
    cursor: grab;
    font-size: 0;
`;

export const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.sliderRange.thumb};;
    &.track-1 {
      background: ${({ theme }) => theme.palette.sliderRange.track};
    }
`;

export const RangePriceView = styled.div`
  padding: 0.625rem 0;
  width: 100px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.borderLine};
`;
