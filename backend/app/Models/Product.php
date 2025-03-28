<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'compare_price', 'description', 'short_description', 'image', 'category_id', 'brand_id', 'quantity', 'sku', 'bar_code', 'status', 'is_featured',];
}
