# react-native-setcard-utils

A utility library for React Native providing reusable functions like `checkIsEmail`, `checkIsPassword`, `memoize`. Designed to simplify your development process with efficient and handy tools.

## Installation

Install the package via npm or yarn:

```bash
npm install react-native-setcard-utils

yarn add react-native-setcard-utils
```

## Usage

```bash

const expensiveFunction = (num) => {
  console.log('Calculating...');
  return num * 2;
};

const memoizedFunction = memoize(expensiveFunction);

console.log(memoizedFunction(2)); // Output: Calculating... 4
console.log(memoizedFunction(2)); // Output: 4 (cached, no recalculation)
```

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.

## Author
Developed by salika.