<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $cart = $request->session()->get('cart', []);

        $cartCollection = collect($cart)->map(function ($item) {
            return (object) $item;
        });

        return Inertia::render("Commerce/Cart/Index", [
            "cartItems" => CartResource::collection($cartCollection)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required',
            'qty' => 'required|integer|min:1',
            'subtotal' => 'required|min:0',
        ]);

        $productIds = $request->input("product_id");
        $qty = $request->input("qty");
        $subTotalPrice = $request->input("subtotal");
        $subTotals = $qty * $subTotalPrice;

        $cart = $request->session()->get('cart', []);

        if (isset($cart[$productIds])) {
            $qtyTotal = $qty + $cart[$productIds]['qty'];
            $subTotals = $qtyTotal * $subTotalPrice;
            $cart[$productIds]['qty'] += $qty;
            $cart[$productIds]['subtotal_price'] += $subTotals;
        } else {
            $cart[$productIds] = [
                "product_id" => $productIds,
                "qty" => $qty,
                "subtotal_price" => $subTotals,
            ];
        }

        $request->session()->put('cart', $cart);

        return redirect()->route('cart.index')->with('success', 'Product added to cart'); 
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $cart = $request->session()->get('cart', []);

        if (isset($cart[$id])) {
            unset($cart[$id]);
            $request->session()->put('cart', $cart);
        }

        return redirect()->back()->with('success', "Shopping Cart successfully deleted.");
    }
}
