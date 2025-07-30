
number = [1,4,5,6,7,4,3]
const findDuplicate = (number)=>{
const seen = new Set()
const duplicates =new Set()
for (const element of number){
  if (seen.has(element)){
duplicates.add(element)
  }
    seen.add(element)
}
return [...duplicates]
}


findDuplicate(number)