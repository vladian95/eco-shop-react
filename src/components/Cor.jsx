import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Container = styled.div`
  height: 100vh;
  weight: 100%;
  display: flex;
  justify-conten: center;
  align-items: center;
`;

const Cor = () => {
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Cor;
