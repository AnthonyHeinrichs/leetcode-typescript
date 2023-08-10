/* Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order. */

function topKFrequent(nums: number[], k: number): number[] {
  const counts: {[index: string]:any} = {};

  // O(n)
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // O(n log n)
  const sortedKeys = Object.keys(counts).map(Number).sort((a, b) => counts[b] - counts[a]);
  
  return sortedKeys.slice(0, k)
}