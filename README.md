
# User Management Application

This is a simple user management application built with React and Mantine UI library. It allows users to view a list of users fetched from a API, follow/unfollow users, and delete users from the list.

## Deployment

The application is deployed and can be accessed [here](https://snehal-salvi-baxture-assg.onrender.com).



## Features

- Fetches user data from a mock API (JSONPlaceholder).
- Displays user information including name, email, phone, and website.
- Allows users to follow/unfollow other users.
- Provides an option to delete users from the list.
- Uses Mantine UI components for a clean and responsive user interface.

## Installation

 1. Clone the Repository

 2. Navigate to the project directory:

 3. Install dependencies
```
yarn install
```
4. Start the development server
```
yarn start
```
5. Open your web browser and visit:
```
http://localhost:{PORT} 
```

## Usage

- Upon launching the application, you will see a list of users fetched from the mock API.
- Click on the "Follow" button to follow a user. The button text will change to "Unfollow" indicating that you are following the user.
- You can click on the "Unfollow" button to unfollow a user.
- To delete a user from the list, click on the "Delete" button next to the user's information.

## Approach

To address this problem, I followed a structured approach:

1. **Understanding the Requirements**: Carefully read and understood the requirements outlined in the task description. Identified key features such as fetching user data, displaying user information, follow/unfollow functionality, and user deletion.

2. **Research and Exploration**: Conducted research to explore suitable libraries and tools for building the application. Chose Mantine for UI components due to its simplicity and flexibility.

3. **Component Design**: Designed the structure of the application components, including the main HomePage component responsible for rendering user cards and handling user interactions.

4. **Fetching User Data**: Utilized the `useEffect` hook to fetch user data from the JSONPlaceholder API upon component mount. Implemented error handling to manage any issues during data retrieval.

5. **State Management**: Utilized React's `useState` hook to manage state variables such as user data, followed user IDs, and loading state.

6. **User Interaction**: Implemented functionality to toggle follow/unfollow status for users and delete users from the list. Used conditional rendering to display appropriate buttons based on user follow status.

7. **UI Design**: Styled the application using custom CSS styles to enhance the user interface and provide a visually appealing experience.

8. **Testing and Optimization**: Tested the application to ensure functionality, responsiveness, and performance. Made optimizations where necessary to improve the user experience.

### Additional Considerations

1. **Avatar Generation**: Implemented a function to generate avatar URLs based on user names using the DiceBear API.
2. **Icon Library**: Integrated Tabler Icons library for consistent and visually appealing icons throughout the application.
3. **Error Handling**: Implemented error handling to gracefully manage any errors that occur during data fetching.

## Technlogies Used

- [React](https://reactjs.org/)
- [Mantine UI](https://mantine.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Tabler Icons](https://tablericons.com/)


## Authors

- [@Snehal]https://github.com/Snehal-Salvi