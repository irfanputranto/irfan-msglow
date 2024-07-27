<?php

namespace App\Http\Resources;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $product = Product::find($this->product_id);

        return [
            'product_id' => $this->product_id,
            'product' => $product ? new ProductResource($product) : null,
            'qty' => $this->qty,
            'subtotal_price' => $this->subtotal_price,
        ];
    }
}
