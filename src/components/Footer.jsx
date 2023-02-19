import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    display: flex:
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px:
`;
const SocialContainer = styled.div`
  display: flex;
`;
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CASUAL-SHOP</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          consequuntur deleniti recusandae necessitatibus nesciunt illum
          suscipit enim, tempora, eos distinctio, autem qui amet fugit
          repellendus ratione! Aspernatur eius dicta dolores.
        </Desc>
        <SocialContainer>
          <IconContainer color="3b5999">
            <Facebook />
          </IconContainer>
          <IconContainer color="e4405f">
            <Instagram />
          </IconContainer>
          <IconContainer color="55acee">
            <Twitter />
          </IconContainer>
          <IconContainer color="e60023">
            <Pinterest />
          </IconContainer>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
