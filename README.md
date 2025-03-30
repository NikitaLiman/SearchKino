# SearchKino

SearchKino is a web application for searching and discovering movies and TV shows, built with React and modern web technologies.

## Technologies Used

### Frontend
- **React JS**: JavaScript library for building user interfaces
- **JSX**: Syntax extension for JavaScript used with React
- **Redux**: State management library for JavaScript applications
- **TypeScript**: Typed superset of JavaScript for better developer experience
- **JavaScript**: Core programming language for web development
- **HTML**: Markup language for web pages
- **SCSS**: Advanced CSS preprocessor for styling

### API Integration
- **REST API**: Integration with external movie/TV show databases 

## Features

- Search for movies and TV shows
- Browse popular, trending, and top-rated content
- View detailed information about movies and shows
- Filter results by genres, year, rating, etc.
- Save favorites for quick access
- Responsive design for mobile and desktop viewing

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nikitaliman/SearchKino.git
cd SearchKino
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your API keys:
```
REACT_APP_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
SearchKino/
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── redux/        # Redux store, actions, and reducers
│   │   ├── actions/  # Action creators
│   │   ├── reducers/ # State reducers
│   │   └── store.ts  # Redux store configuration
│   ├── services/     # API services
│   ├── styles/       # SCSS stylesheets
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main App component
│   └── index.tsx     # Entry point
└── ...
```

## API Integration

SearchKino integrates with movie databases through REST APIs to fetch movie data, search results, and details.

## State Management

Redux is used for application-wide state management:
- **Store**: Central state container
- **Actions**: Events that trigger state changes
- **Reducers**: Functions that determine how state changes
- **Selectors**: Functions to extract specific pieces of state

## Styling

The application uses SCSS for styling, allowing for:
- Nested CSS rules
- Variables for consistent theming
- Mixins for reusable style patterns
- Responsive design through media queries

## Deployment

The application is deployed on GitHub Pages. To deploy your own instance:

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/SearchKino"
```

2. Build and deploy the application:
```bash
npm run build
npm run deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
