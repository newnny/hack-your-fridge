# [Hack your Fridge](https://hack-your-fridge.vercel.app/)

Hack your Fridge is a web application that helps users cook efficiently by suggesting recipes based on the ingredients they have in their fridge. The application leverages the Yummly API and is built using TypeScript, React, and deployed on Vercel.


## Features

1. **Ingredient Input:**
   - Users can input the ingredients they have in their fridge or pantry.
   - Support for various ingredients and quantity specifications.

2. **Recipe Suggestions:**
   - Fetches and displays recipe suggestions from the Yummly API based on user-inputted ingredients.
   - Users can explore a list of recipes that can be prepared with their available ingredients.

3. **Recipe Details:**
   - View detailed information about selected recipes, including ingredients, instructions, and estimated cooking time.
   - Direct link to the full recipe on the Yummly website for more details.
   - 
## Getting Started

### Prerequisites

- Node.js and npm installed
- Yummly API key (I got the api key through [Rapidapi](https://rapidapi.com/apidojo/api/yummly2/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hack-your-fridge.git

2. Install dependencies:
```
  cd hack-your-fridge
  npm install
```
3. Set up Yummly API key:

    Obtain an API key from the Yummly developer portal or [Rapidapi](https://rapidapi.com/apidojo/api/yummly2/).
    Create a ***.env file*** in the project root and add your API key:

    makefile

        REACT_APP_YUMMLY_API_KEY=your-api-key


## Usage

  Start the application:    
  
    npm start
    
 Open your browser and visit http://localhost:3000.


## Contributing

Contributions are welcome! 


## License

This project is licensed under the MIT License.


## Acknowledgments

Yummly API for providing recipe data.
