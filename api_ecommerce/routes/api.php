<?php
use App\Http\Controllers\VegetableController;
use App\Http\Controllers\DataHome;
use App\Http\Controllers\SlideDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/vegetables', [VegetableController::class, 'getVegetables']);
Route::get('/dataSlides', [SlideDataController::class, 'getDataSlide']);
Route::get('/dataHome',    [DataHome::class, 'getDataHome']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
