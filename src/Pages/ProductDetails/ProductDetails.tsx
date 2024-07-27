import { useParams } from "react-router-dom";

import { useGetProductByIdQuery } from "../../Redux/api/api";
import Details from "../../Components/Details/Details";
import { useState } from "react";
import NoProductFound from "../../Components/Animation/NoProductFound";
import DetailsSkeleton from "../../Components/Animation/DetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductByIdQuery(id!, { skip: !id });
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const product = data?.data[0];
  

  return (
    <div className="bg-gray-900 py-12">
      <div className="pt-20 text-white mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        {!data || !data.data.length ? (
          <NoProductFound></NoProductFound>
        ) : (
          <div>
            {isLoading ? (
              <DetailsSkeleton></DetailsSkeleton>
            ) : (
              <Details product={product}></Details>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
