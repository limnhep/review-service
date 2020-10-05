import React from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from './ProgressBar.jsx';

const Container = styled.div`
  display: flex;
  max-height: ${(props) => (props.isModal ? '400' : '120')}px;
`;

const AllRows = styled.div`
  display: flex;
  font-weight: 400;
  flex-direction: ${(props) => (props.isModal ? 'column' : 'row')};
  width: 100%;
  ${(props) => (props.isModal ? null : 'justify-content: space-between')};
  height: ${(props) => (props.isModal ? '250' : '150')}px;

  ${(props) =>
    props.isModal
      ? '@media (max-width: 1120px) {flex-direction: row;}'
      : '@media (max-width: 800px) {display: none;}'};
`;

const CategorySubcontainer = styled.div`
  width: 100%;

  @media (max-width: 1120px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 0px;
  max-width: 100%;
`;

const Category = styled.div`
  font-size: ${(props) => (props.isModal ? '14' : '16')}px;
  font-weight: ${(props) => (props.isModal ? '300' : '400')};
`;

const Rating = styled.div`
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const categories = [
  {
    label: 'Cleanliness',
    propName: 'avgcleanlinessRating',
  },
  {
    label: 'Communication',
    propName: 'avgcommunicationRating',
  },
  {
    label: 'Check-In',
    propName: 'avgcheckInRating',
  },
  {
    label: 'Accuracy',
    propName: 'avgaccuracyRating',
  },
  {
    label: 'Location',
    propName: 'avglocationRating',
  },
  {
    label: 'Value',
    propName: 'avgvalueRating',
  },
];

const RatingList = (props) => {
  const isModal = props.isModal;

  return (
    <Container isModal={isModal}>
      <AllRows isModal={isModal}>
        <CategorySubcontainer>
          {[0, 1, 2].map((index) => {
            const category = categories[index];
            return (
              <Row isModal={isModal}>
                <Category isModal={isModal}> {category.label} </Category>
                <Rating>
                  <ProgressBar
                    completed={
                      (parseFloat(props[category.propName]).toFixed(1) / 5) *
                      100
                    }
                    isModal={isModal}
                  ></ProgressBar>
                  {parseFloat(props[category.propName]).toFixed(1)}
                </Rating>
              </Row>
            );
          })}
        </CategorySubcontainer>

        <CategorySubcontainer>
          {[3, 4, 5].map((index) => {
            const category = categories[index];
            return (
              <Row isModal={isModal}>
                <Category isModal={isModal}> {category.label} </Category>
                <Rating>
                  <ProgressBar
                    completed={
                      (parseFloat(props[category.propName]).toFixed(1) / 5) *
                      100
                    }
                    isModal={isModal}
                  ></ProgressBar>
                  {parseFloat(props[category.propName]).toFixed(1)}
                </Rating>
              </Row>
            );
          })}
        </CategorySubcontainer>
      </AllRows>
    </Container>
  );
};

export default RatingList;
