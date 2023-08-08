/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order. */

// Brute force: itterating over every number and comparing both
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 1; x < nums.length; x++) {
      if (nums[i] + nums[x] == target) {
        return [i, x];
      }
    }
  }
  return []
};

console.log(twoSum([2,7,11,15], 18))

/* Using a hashmap to check if the difference of the number we
are searching for exists in the map, then returning the indexes*/
function twoSumTwo(nums: number[], target: number): number[] { 
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i]
    };
    map.set(nums[i], i);
  };
  return []
}

console.log(twoSumTwo([2,7,11,15], 22))
