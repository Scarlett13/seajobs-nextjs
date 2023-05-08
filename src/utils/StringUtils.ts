const capitalizeWord = (str: string) => {
  const firstChar = str.charAt(0).toLocaleUpperCase();
  const restOfStr = str.substring(1).toLocaleLowerCase();

  return `${firstChar}${restOfStr}`;
};

const capitalizeEachWord = (str: string) =>
  str
    .split(" ")
    .map((word: string) => capitalizeWord(word))
    .join(" ");

export function isEmpty(value: string):boolean{
	return value && value.length > 0?false:true;
}

export function keahlianValueToDb(value: string[]){
	return value.toString().toLowerCase().replaceAll(" ", "_");
}

export function keahlianDbToValue(value: string){
	if(!value || value.length<3){
		return false;
	}
	let tempValue = value.replaceAll("_", " ");
	let tempArrayValue = tempValue.split(",");

	if(tempArrayValue.length<1){
		return false;
	}

	tempArrayValue.forEach((singleValue, index)=>{
		tempArrayValue[index] = capitalizeEachWord(singleValue);
	});

	return tempArrayValue;
}