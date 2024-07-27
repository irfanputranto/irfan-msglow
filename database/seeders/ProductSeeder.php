<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [];

        for($i = 0; $i < 50;$i++) {
            $products[] = [
                'name' => 'products ' . $i,
                'description' => 'Description for Product ' . $i,
                'image' => 'https://picsum.photos/200?random=' . rand(1, 500),
                'price' => rand(100, 500),
            ];
        }

        DB::table("products")->insert($products);
    }
}
