import Announcment from '../components/Announcment';
// import Cor from '../components/Cor';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
// import Slider from '../components/Slider';

function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      {/* <Cor /> */}
      {/* <Slider /> */}
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}

export default Home;
