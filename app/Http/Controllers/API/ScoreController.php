<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{

    public function index()
    {
        $score = Score::query()->orderBy("deceased")->paginate(5);
        return response()->json($score, 200);
    }

    //
    public function create(Request $request)
    {
        $val = $request->validate([
            'name' => ['required', 'string', 'max:20'],
            'time' => ['required', 'string', 'max:100'],
            'rang' => ['required', 'numeric'],
            'deceased' => ['required', 'numeric'],
        ]);



        $Player = new Score();
        $Player->name = $request->get("name");
        $Player->time = $request->get("time");
        $Player->rang = $request->get("rang");
        $Player->deceased = $request->get("deceased");

        $Player->save();


        return response()->json($Player,200);
    }
}
