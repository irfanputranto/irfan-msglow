<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'image' => $this->image,
            'created_at' => (new Carbon($this->created_at))->format("Y-m-d H:i:s"),
            'updated_at' => (new Carbon($this->updated_at))->format("Y-m-d H:i:s"),
        ];
    }
}
