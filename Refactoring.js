function tripleNums(nums) {
  const tripledArr = [];
  for (let i = 0; i < nums.length; i++) {
    tripledArr.push(nums[i] * 3);
  }
  return tripledArr;
}
