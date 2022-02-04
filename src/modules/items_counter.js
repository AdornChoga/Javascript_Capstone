const countItems = (items) => {
  if (items.length === undefined) {
    return 0;
  }
  return items.length;
};

export default countItems;