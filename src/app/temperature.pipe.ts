import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone:true,
})
export class TempraturePipe implements PipeTransform{
    transform(value:number|string|null , inputType:'cel'|'feh',outputType?:'cel'|'feh'){        //Important method, angular automatically execute this method when this pipe is used
        if(!value){
            return value;
        }
        
        let val:number;

        if(typeof value === 'string'){
            val=parseFloat(value);
        }
        else{
            val=value;
        }
        let outputTemp:number;
        if(inputType==='cel' && outputType==='feh'){
             outputTemp=val*(9/5)+32;
        }else if(inputType==='feh' && outputType==='cel'){
             outputTemp = (val-32)*(5/9);
        }
        else{
            outputTemp=val;
        }
        
        let symbol : 'C' | 'F';

        if(!outputType){
            symbol = inputType==='cel'? 'C':'F';

        }
        else{
            symbol=outputType==='cel'?'C':'F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}