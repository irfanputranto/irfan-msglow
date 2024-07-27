import FooterCommerce from "@/Components/FooterCommerce";
import NavBarCommerce from "@/Components/NavBarCommerce";
import Pagination from "@/Components/Pagination";
import { Head, router } from "@inertiajs/react";
import React from "react";
import { Route } from "react-router-dom";

const Index = ({ products, cartItems }) => {

    const addToCart = (product) => {
        router.post(route('cart.store'), {
            product_id: product?.id,
            qty: 1,
            subtotal: product?.price
        }, {
            onSuccess: () => {
                console.log('Product added to cart');
            },
            onError: (errors) => {
                console.error('Error adding product to cart:', errors);
            }
        });
    }

    return (
        <React.Fragment>
            <Head title="Home" />

            <div className="mb-5">
                <NavBarCommerce cartItems={cartItems} />
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Product List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products?.data?.length > 0 ? (
                        products?.data?.map((product) => (
                            <div key={product.id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={product?.image ? `${product?.image}` : '/storage/img/default-product-img.svg'} alt={product.name} className="w-full h-48 object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/storage/img/default-product-img.svg';
                                    }}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className="text-gray-800 font-bold">{`$${product.price}`}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-800 ">Tidak ada produk yang tersedia.</p>
                    )}
                </div>
                <div className="mt-10">
                <Pagination links={products?.meta?.links}/>
                </div>
            </div>
            <div className="mt-7">
                <FooterCommerce />
            </div>
        </React.Fragment>
    );
}

export default Index;