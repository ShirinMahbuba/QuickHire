<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApplicationController extends Controller {
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'job_id' => 'required|exists:jobs,id',
            'name' => 'required|string',
            'email' => 'required|email',
            'resume_link' => 'required|url',
            'cover_note' => 'required|string',
        ]);
        if ($validator->fails()) return response()->json($validator->errors(), 422);
        $app = Application::create($request->all());
        return response()->json($app, 201);
    }
}
