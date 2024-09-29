
# Tic-Tac-Toe Game in React

A simple Tic-Tac-Toe game built with React, allowing players to take turns, track game history, and revisit past moves. The project is Dockerized, making it easy to set up and run in a consistent environment.

## 🛠 Features
- **Interactive Game Board**: A 3x3 grid where players take turns clicking to place their 'X' or 'O'.
- **Game Status**: Displays the current player or the winner when the game ends.
- **Game History**: Tracks every move, allowing players to view and "jump" to previous steps of the game.
- **Winner Determination**: Built-in logic to determine the winner of the game.
- **Dockerized Setup**: Easily run the app in a containerized environment using Docker.

## 🎮 Functionalities
### 1. **Gameplay**
   - A 3x3 grid that alternates between 'X' and 'O' as players click on the squares.
   - Displays the current player’s turn and announces the winner once the game is complete.

### 2. **Game History**
   - Tracks each move in a history array, allowing users to view the sequence of moves.
   - Players can "jump" to any previous move, letting them see the board's state at that point.

### 3. **Winner Determination**
   - Includes logic to identify a winner based on predefined winning line combinations (rows, columns, diagonals).
   - Displays the winner when one is found, or announces the next player's turn.

## 🚀 Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/en/) if you want to run the app locally without Docker.

### Running the App with Docker

1. **Clone the Repository**
   ```bash
   git clone https://github.com/amineenim/TicTacToe-Game.git
   cd TicTacToe-Game/

   ```

2. **Build the Docker Image**
   ```bash
   docker build -t react-tictactoe-app .
   ```

3. **Run the Docker Container**
   ```bash
   docker run -p 3000:3000 react-tictactoe-app
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).

### Running the App Locally (Without Docker)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Application**
   ```bash
   npm start
   ```
   The application will run on [http://localhost:3000](http://localhost:3000).

## 📝 Usage
- **Play the Game**: Click on an empty square to make a move.
- **View Game Status**: The status at the top displays whose turn it is or who the winner is.
- **Game History**: Jump to any previous move by selecting an entry from the history list (if implemented in `Game.js`).

## 🛠 Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Docker**: Containerization platform to run the application in isolated environments.
