<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller {
    public function index(Request $request) {
        $query = Job::query();
        if ($request->search) $query->where('title', 'like', '%'.$request->search.'%');
        if ($request->category) $query->where('category', $request->category);
        if ($request->location) $query->where('location', $request->location);
        return response()->json($query->get());
    }
    public function show($id) {
        return response()->json(Job::findOrFail($id));
    }
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'company' => 'required|string',
            'location' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
        ]);
        if ($validator->fails()) return response()->json($validator->errors(), 422);
        $job = Job::create($request->all());
        return response()->json($job, 201);
    }
    public function destroy($id) {
        Job::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
