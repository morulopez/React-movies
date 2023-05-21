
## Features

- PMovie Search: Users can enter a search query in the search form to find movies matching their query.
- Custom Hooks: The project utilizes custom hooks to separate logic and enhance code reusability. These custom hooks handle API calls, sorting functionality, and debounce for better control over search requests.
- Sorting by Title: The movie list can be sorted by title using a checkbox input. When the checkbox is checked, the movie list is sorted in ascending order based on the movie titles.
- Avoiding Duplicate API Calls: The useRef hook is used to control the search query content and prevent unnecessary API calls if the query remains the same.
- Debounce Functionality: The just-debounce-it library is utilized to create a debounce effect for API calls, allowing better control over request timing and preventing excessive API requests.

## Technology Stack

- React
- JavaScript
- CSS
- just-debounce-it

## How To Use

- Clone the repository: git clone https://github.com/username/React-movies.git.
- Install dependencies: npm install.
- Run the application: npm run dev.
Once you run the application, you will be presented with a list of products. You can add products to the cart or use the filters to narrow down the product list.
