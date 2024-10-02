# Snake Game TAS in C++

## Description
This project is a Tool-Assisted Speedrun (TAS) implementation for the classic Snake game using C++. The program is designed to automatically play and beat the Snake game by following a pre-determined optimal path to maximize the score without human intervention.

## Features
- Console-based Snake game
- Automated gameplay using a TAS algorithm
- Optimal pathfinding to maximize score
- Game over detection when the snake collides with itself or the walls

## Requirements
- C++ compiler (e.g., g++)
- Make (optional, for using the provided Makefile)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/snake-game-tas-cpp.git
    cd snake-game-tas-cpp
    ```

2. Compile the game:
    ```sh
    g++ -o snake_tas main.cpp
    ```

    Alternatively, if you have `make` installed, you can use the provided Makefile:
    ```sh
    make
    ```

## Usage
Run the compiled executable to start the TAS program:
```sh
./snake_tas

The program will automatically control the snake to play the game and aim for the highest possible score.

Code Structure
main.cpp: The main file containing the game logic, TAS algorithm, and rendering.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Inspired by the classic Snake game.
I be bored ngl 
Thanks to all contributors and open-source projects that helped in the development of this TAS program.
