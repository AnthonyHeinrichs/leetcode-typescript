/* Given an array of strings strs, group the anagrams together. 
You can return the answer in any order. 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. */

function groupAnagrams(strs: string[]): string[][] {
  const stringMap = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!stringMap.has(sortedStr)) {
      stringMap.set(sortedStr, []);
    }
    stringMap.get(sortedStr)!.push(str);
  }

  return [...stringMap.values()];
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
