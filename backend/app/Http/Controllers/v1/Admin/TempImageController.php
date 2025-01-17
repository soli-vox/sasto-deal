<?php

namespace App\Http\Controllers\v1\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

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
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('uploads/temp'), $imageName);

        $tempImage->name = $imageName;
        $tempImage->save();

        //Creating the thumbnail
        $imageManager = new ImageManager(Driver::class);
        $thumbImage = $imageManager->read(public_path('uploads/temp/' . $imageName));
        $thumbImage->coverDown(400, 450);
        $thumbImage->save(public_path('uploads/temp/thumbnails/' . $imageName));

        return response()->json([
            'status' => 200,
            'message' => 'Image has been uploaded successfully.',
            'data' => $tempImage
        ], 200);
    }
}
