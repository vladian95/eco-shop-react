import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Place,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
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
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-item: center;
`;

const Payment = styled.img`
  width: 50%;
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
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Place style={{ marginRight: '10px' }} /> 622 Dixie Path , South
          982262
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +7 978 123 45 67
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '10px' }} /> kvankvan1995@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
