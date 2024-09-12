let getCmOrM=(volum)=>{
	let metricSystem='';
	if(/[a-zA-Z]/.test(volum[volum.length-1]) && /[a-zA-Z]/.test(volum[volum.length-2])){
		metricSystem+=volum[volum.length-2]+volum[volum.length-1];    
		return metricSystem.toLowerCase();
	}else if(/[a-zA-Z]/.test(volum[volum.length-1])){                  
		 metricSystem+=volum[volum.length-1]
		 return metricSystem.toLowerCase();
	}else{
		 return false;			        }
   }
let diametro="1234cm";
let metricDiametro=getCmOrM(diametro);
console.log(metricDiametro)