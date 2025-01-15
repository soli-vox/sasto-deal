<?php

namespace App\Http\Controllers\v1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            $user = User::find(Auth::user()->id);
            if ($user->role == 'admin') {
                $token = $user->createToken('mini_market_deal')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'id' => $user->id,
                    'name' => $user->name,
                ], 200);
            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'UnAuthorize Action. Your are not allowed to access this panel.',
                ], 401);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid Email Address or Password. Please check your credentials.',
            ], 401);
        }
    }
}
