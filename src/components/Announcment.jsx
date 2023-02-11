import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcment = () => {
  return <Container>Супер Скидка</Container>;
};

export default Announcment;
