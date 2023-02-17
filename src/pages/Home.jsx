import Announcment from '../components/Announcment';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
