export function filterData(searchText, restaurants) {
  if (!searchText) return restaurants;
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}
