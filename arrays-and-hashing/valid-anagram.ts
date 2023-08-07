/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. */

// Sorting the array and checking each character
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const charArrayS = s.split("").sort().join("")
  const charArrayT = t.split("").sort().join("")

  return (charArrayS == charArrayT)
}; 
