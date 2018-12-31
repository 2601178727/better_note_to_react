function Map(obj) {
  return {
    set(key, val) {
      let newObj = { ...obj };
      newObj[key] = val;
      return Map(newObj);
    },
    get(key) {
      return obj[key];
    }
  }
}