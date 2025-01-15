<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function categories()
    {
        $categories = Category::pluck('name')->all();
        return response()->json([
            'status' => 200,
            'data' => $categories,
        ], 200);
    }
}
