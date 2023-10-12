<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataHome extends Controller
{
    public function getDataHome()
    {
        $dataHome = [

           ['image' =>'produit-1.jpg' , 'type' => 'Fruit & legume' ], 
           ['image' =>'produit-2.jpg' , 'type' => 'marketing' ], 
           ['image' =>'produit-3.jpg' , 'type' => 'Boisson' ], 
           ['image' =>'produit-4.jpg' , 'type' => 'Fruit-sec' ], 
           ['image' =>'produit-5.jpg' , 'type' => 'Fruit Confit' ], 
           ['image' =>'produit-6.jpg' , 'type' => 'Pate de fruit' ], 



        ];
        return response()->json($dataHome);
    }
}

