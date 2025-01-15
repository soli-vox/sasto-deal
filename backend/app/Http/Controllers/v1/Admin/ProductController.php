<?php

namespace App\Http\Controllers\v1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'data' => $products
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "price" => "required",
            "category" => "required|integer",
            "sku" => 'required|unique:products,sku',
            "status" => 'required',
            'is_featured' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $product = new Product();
        $product->title = $request->title;
        $product->price = $request->price;
        $product->compare_price = $request->compare_price;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->sku = $request->sku;
        $product->description = $request->description;
        $product->short_description = $request->short_description;
        $product->status = $request->status;
        $product->is_featured = $request->is_featured;
        $product->save();

        return response()->json([
            'status' => 200,
            'message' => 'New Product has been created successfully.',
            'data' => $product
        ], 200);
    }


    public function show($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such product found.',
                'data' => []
            ], 404);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Product found.',
            'data' => $product
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such product found.',
                'data' => []
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            "name" => "required",
            "price" => "required",
            "category" => "required|integer",
            "sku" => 'required|unique:products,sku ' . $id . ',id',
            "status" => 'required',
            'is_featured' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $product->title = $request->title;
        $product->price = $request->price;
        $product->compare_price = $request->compare_price;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->sku = $request->sku;
        $product->description = $request->description;
        $product->short_description = $request->short_description;
        $product->status = $request->status;
        $product->is_featured = $request->is_featured;
        $product->save();

        return response()->json([
            'status' => 200,
            'message' => 'New Product has been created successfully.',
            'data' => $product
        ], 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such product found.',
                'data' => []
            ], 404);
        }
        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Product has been deleted successfully',
            'data' => []
        ], 200);
    }
}
