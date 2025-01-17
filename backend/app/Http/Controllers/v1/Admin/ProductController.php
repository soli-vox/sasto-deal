<?php

namespace App\Http\Controllers\v1\Admin;

use App\Models\Product;
use App\Models\TempImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;

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
            "price" => "required|numeric",
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
        $product->name = $request->name;
        $product->price = $request->price;
        $product->compare_price = $request->compare_price;
        $product->description = $request->description;
        $product->short_description = $request->short_description;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->sku = $request->sku;
        $product->bar_code = $request->bar_code;
        $product->quantity = $request->quantity;
        $product->status = $request->status;
        $product->is_featured = $request->is_featured;
        $product->save();

        if(!empty($request->gallery)){
            foreach($request->gallery as $key=> $tempImagesId){
              $tempImage = TempImage::find($tempImagesId);

              //image extension
                $imageExtArrary = explode('.', $tempImage->name);
                $imageExtension = end($imageExtArrary);
                $productImageName = $product->id . '-' . time() . '.' . $imageExtension;
                
            //Creating larger thumbnail 
                $imageManager = new ImageManager(Driver::class);
                $largeImage = $imageManager->read(public_path('uploads/temp/' . $tempImage->name));
                $largeImage->scaleDown(1200);
                $largeImage->save(public_path('uploads/products/large/' . $productImageName));

            //Creating smaller thumbnail
            $imageManager = new ImageManager(Driver::class);
            $largeImage = $imageManager->read(public_path('uploads/temp/' . $tempImage->name));
            $largeImage->coverDown(400,460);
            $largeImage->save(public_path('uploads/products/small/' . $productImageName));

            //First image of Gallery to be used an main Image of Product
                if($key == 0){
                    $product->image = $productImageName;
                    $product->save();
                }
            }
        }


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
            "price" => "required|numeric",
            "category" => "required|integer",
            "sku" => "required|unique:products,sku,'.$id.',id",
            "status" => 'required',
            'is_featured' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $product->name = $request->name;
        $product->price = $request->price;
        $product->compare_price = $request->compare_price;
        $product->description = $request->description;
        $product->short_description = $request->short_description;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->sku = $request->sku;
        $product->bar_code = $request->bar_code;
        $product->quantity = $request->quantity;
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
