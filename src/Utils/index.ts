import { dataType } from "./constants";

export const findPivotIndex = (data:dataType[])=>{
    if(data.length>0){
        let summ=0;
        data.forEach((e,i)=>{
            summ = summ+ e.netWorth;
        })
        const mean=summ/2
        let firstHalf=0,secondHalf =0;
        let pivotIndex=0;
        data.forEach((e,i)=>{
            if(firstHalf+e.netWorth < mean){
                firstHalf=firstHalf+e.netWorth;
            }
            else{
                if(pivotIndex === 0){
                    pivotIndex =i;
                }else{
                    secondHalf=secondHalf+e.netWorth;
                }
            }
        })
        if(firstHalf === secondHalf){
            return pivotIndex;
        }else{
            return -1;
        }
    }
    return -1;
}

