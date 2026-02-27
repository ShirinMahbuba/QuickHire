<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
   protected $fillable = ['title', 'company', 'location', 'category', 'description'];
public function applications() { return $this->hasMany(Application::class); }
}
