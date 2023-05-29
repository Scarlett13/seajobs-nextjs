export function filterStringInArray(array: any[], filters: { [x: string]: any[]; }) {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;

			filters[key].forEach((filterItem)=>{
				console.log("filteritem",filterItem)
				return array.filter(o =>
					Object.keys(o).some(k => o[k].toLowerCase().includes(filterItem.toLowerCase())));
			})
    });
  });
}

function isNonEmptyArrayOfStrings(value: unknown): value is string[] {
	return Array.isArray(value) && value.length > 0 && value.every(item => typeof item === "string");
}

const isStringArray = (test: string|string[]): boolean => {
	return Array.isArray(test) && !test.some((value) => typeof value !== 'string')
 }

 export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);