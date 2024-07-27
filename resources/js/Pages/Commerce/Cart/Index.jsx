import FooterCommerce from "@/Components/FooterCommerce";
import NavBarCommerce from "@/Components/NavBarCommerce";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";


const Index = ({ cartItems }) => {
    const { flash } = usePage().props;
    const [cartProduct, setCartProduct] = useState();
    const dialogRef = useRef(null);

    const confirmation = (item) => {
        dialogRef.current.showModal();
        setCartProduct(item)
    }

    const removeFromCart = (id) => {
        router.delete(route('cart.destroy', { id }), {
            onSuccess: () => {
                dialogRef.current.close();
            }
        })
    }

    const calculateTotal = () => {
        return cartItems?.data?.reduce((total, item) => total + (item?.product?.price * item?.qty), 0);
    };

    return (
        <React.Fragment>
            <div className="flex flex-col min-h-screen">
                <Head title="Cart Items" />
                <div className="mb-5">
                    <NavBarCommerce cartItems={cartItems} />
                </div>
                <div className="container mx-auto p-4">
                    {flash?.success && (<div role="alert" className="alert alert-success text-white mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 shrink-0 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{flash?.success}</span>
                    </div>)}

                    <h1 className="text-2xl font-bold mb-4">Shopping cart</h1>
                    <div className="bg-white shadow-xl overflow-hidden sm:rounded-lg max-h-96 overflow-y-auto rounded-md p-4 border">
                        <ul className="divide-y divide-gray-200">
                            {cartItems?.data?.length > 0 ? (
                                cartItems?.data?.map((item) => (
                                    <li key={item?.product_id} className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img src={item?.product?.image ? `${item?.product?.image}` : '/storage/img/default-product-img.svg'} alt={item.product.name} className="w-20 h-20 object-cover" 
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = '/storage/img/default-product-img.svg';
                                                }}
                                                />
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-medium text-gray-900">{item?.product?.name}</h3>
                                                    <p className="text-sm text-gray-500">{item?.product?.description}</p>
                                                    <p className="text-sm text-gray-900">{`$${item?.product?.price} x ${item?.qty}`}</p>
                                                    <p className="text-sm text-gray-900">{`Subtotal: $${(item?.subtotal_price).toFixed(2)}`}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-error hover:text-white"
                                                    onClick={() => confirmation(item)}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="px-4 py-4 sm:px-6">
                                    <p className="text-sm text-gray-500">Your shopping cart is empty.</p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total Shopping: ${calculateTotal().toFixed(2)}</h2>
                    </div>
                </div>

                <div className="mt-7">
                    <FooterCommerce />
                </div>
            </div>

            <dialog ref={dialogRef} id="deleteCart" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Delete Cart {cartProduct?.product?.name} !</h3>
                    <p className="py-4">Are you sure you want to delete your cart <span className="font-bold">"{cartProduct?.product?.name}"</span>?</p>

                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={() => removeFromCart(cartProduct?.product_id)}>Delete</button>
                        <form method="dialog">
                            <button className="btn btn-error">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </React.Fragment>
    )
}


export default Index;