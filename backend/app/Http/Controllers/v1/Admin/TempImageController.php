<?php

namespace App\Http\Controllers\v1\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $tempImage = new TempImage();
        $tempImage->name = 'Hello Temp Image';
        $tempImage->save();

        $image = $request->file('image');
        $imageName = time() . '_' . $image->extension();
        $image->move(public_path('uploads/temp'), $imageName);
        $tempImage->name = $imageName;
        $tempImage->save();

        return response()->json([
            'status' => 200,
            'data' => $tempImage
        ], 200);
    }
}
