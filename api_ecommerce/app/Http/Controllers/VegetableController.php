<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VegetableController extends Controller
{
    public function getVegetables()
    {
        $dataVegetable = [


            ['id' => 1, 'name' => 'POMME', 'price' => 8.0 , 'photos' => 'sec-1.jpg', 'cat' => 'fruit'],
            ['id' => 2, 'name' => 'BANANE', 'price' => 3.0, 'photos' => 'jam-1.jpg', 'cat' => 'confiture'],
            ['id' => 3, 'name' => 'POIVRON', 'price' =>  2.5, 'photos' => 'leg-1.jpg', 'cat' => 'legume'],
            ['id' => 4, 'name' => 'FRAISE', 'price' => 3.5, 'photos' => 'jam-2.jpg', 'cat' => 'confiture'],
            ['id' => 5, 'name' => 'CAROTTE', 'price' => 2.0 , 'photos' => 'jus-1.jpg', 'cat' => 'jus'],
            ['id' => 6, 'name' => 'CITRON', 'price' => 6.0, 'photos' => 'sec-2.jpg', 'cat' => 'fruit'],
            ['id' => 7, 'name' => 'HARICOT', 'price' => 2.0, 'photos' => 'leg-2.jpg', 'cat' => 'fruit'],
            ['id' => 8, 'name' => 'CHOUX', 'price' => 1.5, 'photos' => 'leg-3.jpg', 'cat' => 'jus'],
            ['id' => 9, 'name' => 'COCOMBRE', 'price' => 5.0, 'photos' => 'sec-3.jpg', 'cat' => 'fruit'],
            ['id' => 10, 'name' => 'KAKI', 'price' => 10.0, 'photos' => 'sec-4.jpg', 'cat' => 'fruit'],
            ['id' => 11, 'name' => 'MEDJOOL', 'price' => 3.0 , 'photos' => 'jus-2.jpg', 'cat' => 'jus'],
            ['id' => 12, 'name' => 'TOMATE', 'price' =>2.0, 'photos' => 'leg-4.jpg', 'cat' => 'legume'],
            ['id' => 13, 'name' => 'RAISIN', 'price' => 12.0, 'photos' => 'sec-5.jpg', 'cat' => 'fruit'],
            ['id' => 14, 'name' => 'CITRON', 'price' => 2.5, 'photos' => 'jam-3.jpg', 'cat' => 'confiture'],
            ['id' => 15, 'name' => 'BROCOLLI', 'price' => 2.5, 'photos' => 'leg-5.jpg', 'cat' => 'legume'],
            ['id' => 16, 'name' => 'DATTE', 'price' => 15.0, 'photos' => 'sec-6.jpg', 'cat' => 'fruit'],
            ['id' => 17, 'name' => 'CITRON', 'price' => 2.0 , 'photos' => 'jus-3.jpg', 'cat' => 'jus'],
            ['id' => 18, 'name' => 'CAROTTE', 'price' => 1.0, 'photos' => 'leg-6.jpg', 'cat' => 'legume'],
            ['id' => 19, 'name' => 'AVOCAT', 'price' => 2.5 , 'photos' => 'jus-4.jpg', 'cat' => 'jus'],
            ['id' => 20, 'name' => 'MELANGE TROPICANA', 'price' => 1.5 , 'photos' => 'jus-5.jpg', 'cat' => 'jus'],
            ['id' => 21, 'name' => 'ACCAJOU', 'price' => 20.0, 'photos' => 'sec-7.jpg', 'cat' => 'fruit'],
            ['id' => 22, 'name' => 'POMME', 'price' => 2.5, 'photos' => 'jam-4.jpg', 'cat' => 'confiture'],
            ['id' => 23, 'name' => 'OIGNON', 'price' => 1.0, 'photos' => 'leg-7.jpg', 'cat' => 'legume'],
            ['id' => 24, 'name' => 'POMME', 'price' => 2.0, 'photos' => 'leg-8.jpg', 'cat' => 'legume'],
            ['id' => 25, 'name' => 'MANGUES', 'price' => 2.0 , 'photos' => 'jus-6.jpg', 'cat' => 'jus'],
            ['id' => 26, 'name' => 'FRAISE', 'price' => 10.0, 'photos' => 'sec-8.jpg', 'cat' => 'fruit'],
            ['id' => 27, 'name' => 'MANGUE', 'price' => 15.0, 'photos' => 'sec-9.jpg', 'cat' => 'fruit'],
            ['id' =>28, 'name' => 'AIL', 'price' => 2.0,'photos' => 'leg-9.jpg', 'cat' => 'legume'],
            ['id' => 29, 'name' => 'ANANAS', 'price' => 12.0, 'photos' => 'sec-10.jpg', 'cat' => 'fruit'],
            ['id' => 30, 'name' => 'PIMENT', 'price' => 2.0, 'photos' => 'leg-10.jpg', 'cat' => 'legume'],
          
 
        ];
        return response()->json($dataVegetable);
    }

}
