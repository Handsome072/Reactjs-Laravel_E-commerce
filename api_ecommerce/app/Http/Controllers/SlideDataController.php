<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SlideDataController extends Controller
{
    public function getDataSlide()
    {
        $dataSlide = [
           ['sary' =>'top-1.jpg' , 'para' => 'Fruit Confits' , 'desc' => '2fois cette semaine' ], 
           ['sary' =>'top-2.jpg' , 'para' => 'Patte de Fruits' , 'desc' => '4fois cette semaine' ], 
           ['sary' =>'top-3.jpg' , 'para' => 'Fruits sechées' , 'desc' => '6fois cette semaine' ], 
           ['sary' =>'top-1.jpg' , 'para' => 'Fruit Confits' , 'desc' => '3fois cette semaine' ], 
           ['sary' =>'top-2.jpg' , 'para' => 'Patte de Fruits' , 'desc' => '6fois cette semaine' ], 


        ];
        return response()->json($dataSlide);
    }
}
