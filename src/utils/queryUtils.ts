export const parseQuery = (queryString: string): Record<string, string> => {
    const query = new URLSearchParams(queryString);
    return Array.from(query.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
  };
  
  export const stringifyQuery = (queryObj: Record<string, string | number | undefined>): string => {
    const query = new URLSearchParams();
    Object.keys(queryObj).forEach(key => {
      if (queryObj[key] !== undefined) {
        query.append(key, String(queryObj[key]));
      }
    });
    return query.toString();
  };
  