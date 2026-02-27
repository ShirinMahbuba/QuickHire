<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\ApplicationController;

Route::apiResource('jobs', JobController::class)->except(['update']);
Route::post('applications', [ApplicationController::class, 'store']);
