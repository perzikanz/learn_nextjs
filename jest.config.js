module.exports = {
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/../../node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
  },
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
