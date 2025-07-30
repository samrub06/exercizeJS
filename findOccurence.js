const numbers = [1,4,5,3,2,1]
const findOccurence = (numbers)=>{
const count ={}

for (const number of numbers){
	if(count[number] ){count[number] ++}
	else{
		count[number]=1
	}
}
return count
}


const findOccurenceV2 = (numbers)=>{
const count ={}

for (const number of numbers){
	    count[number] = (count[number] || 0) + 1;
}
return count
}

findOccurence(numbers)
findOccurenceV2(numbers)