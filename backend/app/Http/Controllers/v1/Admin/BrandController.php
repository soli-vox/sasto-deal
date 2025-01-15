<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'message' => 'Brand retrieved successfully',
            'data' => $brands
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->status = $request->status;
        $brand->save();
        return response()->json([
            'status' => 200,
            'message' => 'New Brand has been created successfully.',
            'data' => $brand
        ], 200);
    }

    public function show($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such brand found.',
                'data' => []
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Category found.',
            'data' => $brand
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such brand found.',
                'data' => []
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        $brand->name = $request->name;
        $brand->status = $request->status;
        $brand->save();
        return response()->json([
            'status' => 200,
            'message' => 'Brand has been updated successfully.',
            'data' => $brand
        ], 200);
    }

    public function destroy($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such brand found.',
                'data' => []
            ], 404);
        }
        $brand->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Brand has been deleted successfully',
            'data' => []
        ], 200);
    }
}
