<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'message' => 'Category retrieved successfully',
            'data' => $categories
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();
        return response()->json([
            'status' => 200,
            'message' => 'New Category has been created successfully.',
            'data' => $category
        ], 200);
    }

    public function show($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such category found.',
                'data' => []
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Category found.',
            'data' => $category
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such category found.',
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
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();
        return response()->json([
            'status' => 200,
            'message' => 'Category has been updated successfully.',
            'data' => $category
        ], 200);
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => 'No such category found.',
                'data' => []
            ], 404);
        }
        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Category has been deleted successfully',
            'data' => []
        ], 200);
    }
}
