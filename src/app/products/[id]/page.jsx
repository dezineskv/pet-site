import SingleProduct from "../../components/SingleProduct";

const ProductId = async ({ params }) => {
  const id = (await params).id;

  return <SingleProduct id={id} />;
};

export default ProductId;
