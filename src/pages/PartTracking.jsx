import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DaftarBarangMutasi from "../assets/part_tracking/daftar_barang_mutasi.png";
import DaftarBarangRequest from "../assets/part_tracking/daftar_barang_request.png";
import DaftarRequest from "../assets/part_tracking/daftar_request.png";
import FormBarangMasuk from "../assets/part_tracking/form_barang_masuk.png";
import FormMutasiEquipment from "../assets/part_tracking/form_mutasi_equipment.png";
import GoodsReceipt from "../assets/part_tracking/goods_receipt.png";
import HistoryBarangMasuk from "../assets/part_tracking/history_barang_masuk.png";
import HistoryMutasi from "../assets/part_tracking/history_mutasi.png";
import KeranjangBarang from "../assets/part_tracking/keranjang_barang.png";
import KeranjangEquipment from "../assets/part_tracking/keranjang_equipment.png";
import KeranjangRequestBarang from "../assets/part_tracking/keranjang_request_barang.png";
import MasterCrud from "../assets/part_tracking/master_crud.png";
import UserCrud from "../assets/part_tracking/user_crud.png";

const PartTracking = () => {
    const featureCard = [
        {
            title: 'User Management',
            img: UserCrud,
            description: 'This feature is accessible only by the Super Admin and Department Admins. The Super Admin can manage (view, edit, delete, create) users of any level or department. However, Department Admins can only manage users within their own department.',
            align: 'left',
        },
        {
            title: 'Data Master Management',
            img: MasterCrud,
            description: 'Only Super Admins and Department Admins can access Location, Equipment, Problem, Submission, BC Doc, Part Group, and Item modules. The Super Admin can manage all master data across the board. In contrast, Department Admins can only manage Equipment data specific to their department, though they have full management rights for all other features.',
            align: 'right',
        },
        {
            title: 'Incoming Goods Form',
            img: FormBarangMasuk,
            description: 'Accessible by Superadmin and "Warehouse" department users. Users fill in the required data for incoming goods and can utilize QR code scanning for JS Codes and Equipment to speed up data entry.',
            align: 'left',
        },
        {
            title: 'Incoming Goods History',
            img: HistoryBarangMasuk,
            description: 'Accessible by Superadmin and "Warehouse" department users. Users fill in the required data for incoming goods and can utilize QR code scanning for JS Codes and Equipment to speed up data entry.',
            align: 'right',
        },
        {
            title: 'Goods Receipt',
            img: GoodsReceipt,
            description: 'Accessible by Superadmin and "Warehouse" department users. The menu shows a listing of invoices and PICs for incoming goods. It also includes an option to export goods receipt data to Excel.',
            align: 'left',
        },
        {
            title: 'Transfer Items List',
            img: DaftarBarangMutasi,
            description: 'Accessible by Superadmin and all users. This menu shows items filtered by equipment and supports QR/barcode scanning for both equipment and goods. Clicking the cart icon will automatically add the item to the transfer cart.',
            align: 'right',
        },
        {
            title: 'Transfer Cart',
            img: KeranjangBarang,
            description: 'Accessible by Superadmin and all users. This menu shows all items added to the cart. To finalize the transfer, users need to select the target equipment, provide a note, and then click the "Transfer" button to move the items.',
            align: 'left',
        },
        {
            title: 'Transfer Items History',
            img: HistoryMutasi,
            description: 'Accessible by Superadmin and all users. This menu shows the history of all movements, such as item and equipment transfers, as well as goods requests and returns.',
            align: 'right',
        },
        {
            title: 'Equipment Transfer',
            img: FormMutasiEquipment,
            description: 'Accessible by Superadmin and all users. This menu shows items filtered by equipment and supports QR/barcode scanning for both equipment and goods. Clicking the cart icon will automatically add the item to the transfer cart.',
            align: 'left',
        },
        {
            title: 'Transfer Cart',
            img: KeranjangEquipment,
            description: 'Accessible by Superadmin and all users. This menu shows all items added to the cart. To finalize the transfer, users need to select the target equipment, provide a note, and then click the "Transfer" button to move the items.',
            align: 'right',
        },
        {
            title: 'Goods Request List',
            img: DaftarBarangRequest,
            description: 'Accessible by Superadmin and all users. This menu shows items filtered by equipment and supports QR/barcode scanning for both equipment and goods. Clicking the cart icon will automatically add the item to the transfer cart.',
            align: 'left',
        },
        {
            title: 'Transfer Cart',
            img: KeranjangRequestBarang,
            description: 'Accessible by Superadmin and all users. This menu shows all items added to the cart. To finalize the transfer, users need to select the target equipment, provide a note, and then click the "Transfer" button to move the items.',
            align: 'right',
        },
        {
            title: 'Goods Request History',
            img: DaftarRequest,
            description: 'Accessible by Superadmin and all users. This menu shows all items added to the cart. To finalize the transfer, users need to select the target equipment, provide a note, and then click the "Transfer" button to move the items.',
            align: 'left',
        }
    ]
    return (
        <div className="font-barlow flex flex-col items-center">
            <Navbar />
            <div className="pt-20 lg:pt-40 lg:mx-[150px]">  
                <h1 className="text-center text-3xl md:text-5xl font-medium">Part Tracking System</h1>
                <p className="text-center text-base md:text-xl mt-5 px-5 md:px-0">Web application to manage incoming goods, transfer items, and inventory</p>
                <div className="flex flex-col mt-10 lg:mt-20 gap-14 md:gap-20">
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

export default PartTracking;