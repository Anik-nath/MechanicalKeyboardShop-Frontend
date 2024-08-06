import Banner from "../../Components/Banner/Banner";
import Company from "../../Components/Company/Company";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import NewRealese from "../../Components/NewRealese/NewRealese";
import WhyWe from "../../Components/WhyWe/WhyWe";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Banner></Banner>
      <Company></Company>
      <FeaturedProduct></FeaturedProduct>
      <WhyWe></WhyWe>
      <NewRealese></NewRealese>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
