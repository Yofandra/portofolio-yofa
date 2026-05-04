import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCatalog from "../assets/e_commerce/product_catalog.png";
import Cart from "../assets/e_commerce/cart.png";
import Checkout from "../assets/e_commerce/checkout_page.png";
import ProductDetail from "../assets/e_commerce/product_detail.png";
import Payment from "../assets/e_commerce/payment.png";
import ProfileOrders from "../assets/e_commerce/profile_orders.png";

const ECommerce = () => {
  const featureCard = [
    {
      title: "Product Catalog",
      img: ProductCatalog,
      description:
        "Users are able to view all available products and search for specific items by name to quickly find what they need.",
      align: "left",
    },
    {
      title: "Product Detail",
      img: ProductDetail,
      description:
        "Users can access detailed product information, including name, price, available sizes, colors, descriptions, and materials used. Additionally, they can add products to their cart for purchase.",
      align: "right",
    },
    {
      title: "Cart",
      img: Cart,
      description:
        "Users can review all items added to the cart, including quantities and prices. They can adjust the quantity of each item or remove items completely before proceeding to checkout.",
      align: "left",
    },
    {
      title: "Checkout",
      img: Checkout,
      description:
        "Users are able to review their order details prior to checkout, including the shipping address, chosen shipping method, ordered items, and preferred payment method to ensure accuracy before completing the purchase.",
      align: "right",
    },
    {
      title: "Payment",
      img: Payment,
      description:
        "Users are able to review payment details, including the merchant name, user information, total amount due, and the selected payment method, ensuring accuracy before completing the transaction.",
      align: "left",
    },
    {
      title: "Profile Orders",
      img: ProfileOrders,
      description:
        "Users are able to view their profile and track their order history, including the status of each order for better transparency and management.",
      align: "right",
    },
  ];
  return (
    <div className="font-barlow flex flex-col items-center">
      <Navbar />
      <div className="pt-20 lg:pt-40 lg:mx-[150px]">
        <h1 className="text-center text-5xl font-medium">Shou (Sportwears E-commerce)</h1>
        <p className="text-center text-base md:text-xl mt-5 px-5 md:px-0">
          This e-commerce website was initially developed for a client to support their product sales. As the company is no longer operational, the project has been repurposed as a personal portfolio piece to demonstrate my web design and development capabilities.
        </p>
        <div className="flex flex-col mt-10 lg:mt-20 gap-14 md:gap-20">
          {featureCard.map((feature, index) => (
            <div
              key={index}
              className={`flex ${feature.align === "left" ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row"} items-center gap-3 md:gap-16 px-6 md:px-0`}
            >
              {feature.align === "left" ? (
                <>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="lg:w-[700px] shadow-lg rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      {feature.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      {feature.description}
                    </p>
                  </div>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="lg:w-[700px] shadow-lg"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommerce;
