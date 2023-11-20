# ReactContactViewer

This Contacts App is a React application that displays contact information fetched from the JSONPlaceholder API. The interface utilizes Material UI components to present each contact within an expandable accordion, providing a clutter-free user experience.

## Features

- **Dynamic Data Fetching**: On the home page, the app dynamically loads contact data from `https://jsonplaceholder.typicode.com/users`.
- **Expandable Contact Cards**: Contacts are presented in individual accordions, which users can expand to reveal detailed information such as phone numbers, emails, and addresses.
- **Nested Details**: Additional details about the company and address are nested within each contact card, keeping the information structured and easy to navigate.
- **Clean and Minimalist UI**: The app sports a clean, minimalist interface, ensuring a focus on content and usability.

## Live Demo

The app is deployed and can be viewed live at [ReactContactViewer](https://main.d1cp9qfhypir2t.amplifyapp.com/).

## Installation

To install and run the app locally:

```bash
# Clone the repository
git clone https://github.com/JordannTam/ReactContactViewer.git

# Navigate to the app directory
cd ReactContactViewer

# Install the dependencies
npm install

# Start the app on your local machine
npm start
