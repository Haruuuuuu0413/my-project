        let before = 10000;
        let mul = before / 10;
        let time = 9;
        let after = mul * time;
        let lfi =10000;
        let ifl = '支払い金額は';
        let kisetu ='0日後の'
        document.write(time+kisetu+ifl+(lfi+after)+'です')
        //さすけに貸してる金
        let w = 3;
        let h =10;
        let area =(w *h ) / 2 //三角形の面積の公式「(底辺)×(高さ)÷2」を計算し、areaという名前の変数を代入する
        let syouhi =290*0.1;
        let syouhigoukei =290+syouhi;
        document.write("\n三角形の面積は"+area+"㎠"); //面積を出力する
        document.write('\n290円の税込み金額は、')
        document.write(syouhigoukei)
        document.write('円です')

        let y = 12*12*3.14;
        document.write('半径12cmの円の面積は、')
        document.write(y)
        document.write('cm<sup>2</sup>です')