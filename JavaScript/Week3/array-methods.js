//forEach() method
const vaggies = ["onion", "garlic", "tomato"];

vaggies.forEach((ele) => {
  console.log(ele);
});

//filter() method
const nums = [0, 10, 20, 30, 40, 50];
let result = nums.filter((num) => {
  return num > 20;
});
console.log(result);

//map() method
let nums2 = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(nums2);
