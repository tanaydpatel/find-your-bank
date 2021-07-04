# Find your bank

## 🧭 Routes

- `/` redirects to `/all-banks`
- `all-banks` main page of app
- `/favorites` displays favorite banks (set by user)

## 🧠 Approach

**All the data that would be required by different components OR requires high-computation/network resources is saved in Redux store**

### Banks list

- Once the list of banks is fetched for a city it is stored into the Redux store. So that the data can be utilized for running `filter` function.
- Whenever city is changed from dropdown data is fetched from API.

### Search

- Used debouncing to run filter function.
- Used Array.prototype.filter() method to filter out desired result.
- Created searchParams object in Redux store to save search parameters

### Favorite Banks

- Can add/remove from list by simply clicking the ⭐ icon.
- Favorite banks are saved in the `localStorage` of the browser so that user can retain the favorite bank list on next visit to website.

### Pagination

- Developed simple mathematics to keep track of `banks in a page`, `total banks`, `start/end index of current page`

### API cache

- Cached the API response in localStorage for 1 min.

#### Other validation

- Reset search text input when any dropdown is changed
- To input in search box first select category
