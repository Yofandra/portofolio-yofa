import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KelolaBarang from "../assets/working_order/kelola_barang.png";
import KatalogBarang from "../assets/working_order/katalog_barang.png";
import KeranjangBarang from "../assets/working_order/keranjang_barang.png";
import DaftarOrder from "../assets/working_order/daftar_order.png";
import TimeLineOrder from "../assets/working_order/timeline_order.png";
import PersetujuanOrder from "../assets/working_order/persetujuan_order.png";

const WorkingOrder = () => {
  const featureCard = [
    {
      title: "Goods Management",
      img: KelolaBarang,
      description:
        "Only the Super Admin and Department Admins can access this feature. The Super Admin can manage items for any department, whereas Department Admins can only manage items belonging to their own department.",
      align: "left",
    },
    {
      title: "Goods Katalog",
      img: KatalogBarang,
      description:
        "Accessible to everyone, but only 'User' and 'Foreman' levels can add items to the cart. Please note that all items in your cart must belong to the same department. If you wish to add items from another department, you must empty your cart first.",
      align: "right",
    },
    {
      title: "Goods Cart",
      img: KeranjangBarang,
      description:
        "Accessible only to User and Foreman levels. You can add files, notes, and change quantities for each item. Under Order Details, you are required to select your Supervisor, the receiving Supervisor, location, due date, project name, and work description. Once you 'Place Order', your items will be submitted, and the cart will reset automatically.",
      align: "left",
    },
    {
      title: "Order List",
      img: DaftarOrder,
      description:
        "Accessible to all users. This menu shows all department orders—both requested and received—by the current user. Use the filter menu to narrow down the results. Under the action column, you can view specific order details, the items included, and the overall order timeline.",
      align: "right",
    },
    {
      title: "Order Timeline",
      img: TimeLineOrder,
      description:
        "View the status history of your order, including timestamps for when it was approved and when it was finalized.",
      align: "left",
    },
    {
      title: "Order Approval",
      img: PersetujuanOrder,
      description:
        "Only users with the Supervisor level can access this feature. It shows all orders awaiting approval from the respective Supervisor, including outgoing requests and incoming orders.",
      align: "right",
    },
  ];
  return (
    <div className="font-barlow flex flex-col items-center">
      <Navbar />
      <div className="lg:pt-40 lg:mx-[150px]">
        <h1 className="text-center text-5xl font-medium">Working Order</h1>
        <p className="text-center text-base md:text-xl mt-5">
          web application to manage inter-department goods requests in a
          production environment
        </p>
        <div className="flex flex-col lg:mt-20 gap-20">
            {featureCard.map((feature, index) => (
                <div key={index} className={`flex ${feature.align === 'left' ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row'} items-center gap-3 md:gap-16 px-6 md:px-0`}>
                    {feature.align === 'left' ? (
                        <>
                            <img src={feature.img} alt={feature.title} className="lg:w-[700px] shadow-lg" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                                <p className="text-sm md:text-base mt-2 md:mt-5">{feature.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                                <p className="text-sm md:text-base mt-2 md:mt-5">{feature.description}</p>
                            </div>
                            <img src={feature.img} alt={feature.title} className="lg:w-[700px] shadow-lg" />
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

export default WorkingOrder;
