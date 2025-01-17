<?php

use App\Http\Controllers\v1\Admin\AuthController;
use App\Http\Controllers\V1\Admin\BrandController;
use App\Http\Controllers\V1\Admin\CategoryController;
use App\Http\Controllers\v1\Admin\ProductController;
use App\Http\Controllers\v1\Admin\SizeController;
use App\Http\Controllers\v1\Admin\TempImageController;
use App\Http\Controllers\v1\HomeController;
use Illuminate\Support\Facades\Route;

Route::prefix("/v1/admin")->group(function () {

    //Login route
    Route::controller(AuthController::class)->group(function () {
        Route::post('/login', 'login');
    });


    //Authenticated routes

    Route::group(['middleware' => 'auth:sanctum'], function () {

        //Routes for Categories
        Route::controller(CategoryController::class)->group(function () {
            Route::post('/category', 'store');
            Route::get('/category', 'index');
            Route::get('/category/{id}', 'show');
            Route::put('/category/{id}', 'update');
            Route::delete('/category/{id}', 'destroy');
        });

        //Routes for Brands
        Route::controller(BrandController::class)->group(function () {
            Route::post('/brand', 'store');
            Route::get('/brand', 'index');
            Route::get('/brand/{id}', 'show');
            Route::put('/brand/{id}', 'update');
            Route::delete('/brand/{id}', 'destroy');
        });

        //Routes for Sizes
        Route::controller(SizeController::class)->group(function () {
            Route::get('/size', 'index');
        });

        //Routes for Temp Images
        Route::controller(TempImageController::class)->group(function(){
            Route::post('/temp-images', 'store');
        });

        //Routes for Products

        Route::controller(ProductController::class)->group(function () {
            Route::post('/product', 'store');
            Route::get('/product', 'index');
            Route::get('/product/{id}', 'show');
            Route::put('/product/{id}', 'update');
            Route::delete('/product/{id}', 'destroy');
        });
    });
});

//Public routes

Route::get('/nav-data', [HomeController::class, 'navData']);

//middleware('auth:sanctum');
