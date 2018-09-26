<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class KotaController extends Controller
{
    public function getAllKota()
    {
        $kota = DB::table('regencies')->get();
        return response()->json([
            'message' => 'success',
            'data' => $kota
        ], 200);
    }
    public function filterKota(Request $request)
    {
        $filter = strtoupper($request->filter);
        $kota = DB::table('regencies')->where('name', 'like', "%$filter%")->get();
        return response()->json([
            'message' => 'success',
            'data' => $kota
        ], 200);
    }
}
