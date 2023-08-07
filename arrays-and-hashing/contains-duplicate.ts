/* Challenge:
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct. */

// Sorting array and checking pairs, time = O(nlogn), space = O(1)
function containsDuplicate(nums: number[]): boolean {
  const sortedNums = nums.sort((n1,n2) => n1 - n2);
  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] == sortedNums[i + 1]) {
      return true;
    }
  }
  return false;
};

// Using a hash set and checking if the hash set contains the number we are itterating through, time = O(n), space = O(n)
function containsDuplicateTwo(nums: number[]): boolean {
  const hashSet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      return true
    }
    hashSet.add(nums[i])
  }
  return false
};