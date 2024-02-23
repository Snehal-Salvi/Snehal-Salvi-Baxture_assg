"use client";
// Importing necessary modules and components from React and Mantine
import React, { useEffect, useState } from "react";
import { Card, Container, MantineProvider, Loader } from "@mantine/core";
import { theme } from "../theme";
// Importing necessary icons from Tabler Icons library
import {
  IconAt,
  IconPhoneCall,
  IconWorld,
  IconStar,
  IconUserPlus,
  IconUserMinus,
  IconTrash
} from "@tabler/icons-react";
// Importing custom CSS styles 
import "./styles/styles.css";

// Defining the shape of a user object
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

// Functional component for the home page
export default function HomePage() {
  // State variables to hold user data and followed user IDs
  const [users, setUsers] = useState<User[]>([]);
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);
  // State variable to manage loading state
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch users from an API on component mount
  useEffect(() => {
    // Asynchronous function to fetch users from an API
    async function fetchUsers() {
      try {
        // Fetching users data from an API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Parsing the JSON response into an array of user objects
        const data: User[] = await response.json();
        // Setting the first 10 users to the state
        setUsers(data.slice(0, 10));
        // Setting loading state to false once data is fetched
        setLoading(false);
      } catch (error) {
        // Logging errors if any occur during fetching
        console.error("Error fetching users:", error);
        // Setting loading state to false in case of error
        setLoading(false);
      }
    }

    // Calling the fetchUsers function on component mount
    fetchUsers();
  }, []);

  // Function to generate avatar URL based on user's name
  const generateAvatarUrl = (name: string) => {
    const seed = name.replace(/\s+/g, "");
    return `https://api.dicebear.com/7.x/initials/svg?seed=${seed}`;
  };

  // Function to handle toggling follow/unfollow for a user
  const handleFollowToggle = (userId: number) => {
    // If user is already followed, unfollow them
    if (followedUsers.includes(userId)) {
      // Filter out the user ID from the followed users array
      const updatedFollowedUsers = followedUsers.filter((id) => id !== userId);
      // Update the state with the filtered followed users array
      setFollowedUsers(updatedFollowedUsers);
    } else {
      // If user is not followed, follow them
      setFollowedUsers([...followedUsers, userId]);
    }
  };

  // Function to check if a user is followed
  const isFollowed = (userId: number) => {
    return followedUsers.includes(userId);
  };

  // Function to handle deletion of a user
  const handleDelete = (userId: number) => {
    // Filter out the user with the specified userId
    const updatedUsers = users.filter((user) => user.id !== userId);
    // Update the state with the filtered users array
    setUsers(updatedUsers);
  };

  // Rendering the JSX content
  return (
    // Providing Mantine theme to the application
    <MantineProvider theme={theme}>
      <Container>
        {/* Rendering loader component if data is being fetched */}
        {loading ? (
          <Loader />
        ) : (
          <div className="card-container">
            {/* Mapping through users array to render user cards */}
            {users.map((user) => (
              <Card key={user.id} className="card">
                {/* Avatar */}
                <div className="tooltip">
                  <img
                    src={generateAvatarUrl(user.name)}
                    alt={user.name}
                  />
                  <span className="tooltiptext">{user.name}</span>
                </div>
                {/* User name with follow icon if user is followed */}
                <h2>
                  {user.name} {isFollowed(user.id) && <IconStar className="icon" />}
                </h2>
                {/* Email */}
                <p>
                  <IconAt className="icon" />
                  <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer">
                    {user.email}
                  </a>
                </p>
                {/* Phone */}
                <p>
                  <IconPhoneCall className="icon" />
                  <a href={`tel:${user.phone}`} target="_blank" rel="noopener noreferrer">
                    {user.phone}
                  </a>
                </p>
                {/* Website */}
                <p>
                  <IconWorld className="icon" />
                  <a href={user.website} target="_blank" rel="noopener noreferrer">
                    {user.website}
                  </a>
                </p>
                {/* Button container for follow/unfollow and delete buttons */}
                <div className="button-container">
                  {/* Rendering follow/unfollow button based on user follow status */}
                  {isFollowed(user.id) ? (
                    <button onClick={() => handleFollowToggle(user.id)} className="unfollow-button">
                      <IconUserMinus className="icon" />
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => handleFollowToggle(user.id)} className="follow-button">
                      <IconUserPlus className="icon" />
                      Follow
                    </button>
                  )}
                  {/* Delete button */}
                  <button onClick={() => handleDelete(user.id)} className="delete-button">
                    <IconTrash className="icon" />
                    Delete
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </MantineProvider>
  );
}
