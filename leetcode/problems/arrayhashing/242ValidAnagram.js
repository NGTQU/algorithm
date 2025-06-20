/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sOccurrence = {};
  const tOccurrence = {};
  for (let i = 0; i < s.length; i++) {
    sOccurrence[s[i]] = (sOccurrence[s[i]] ?? 0) + 1;
    tOccurrence[t[i]] = (tOccurrence[t[i]] ?? 0) + 1;
  }
  for (const property in sOccurrence) {
    if (sOccurrence[property] !== tOccurrence[property]) return false;
  }
  return true;
};
