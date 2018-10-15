# NodeJS cluster example

<img src="https://i.imgur.com/VE6LN9S.png"/>

Simple <a href="https://nodejs.org/api/cluster.html">nodejs cluster</a> example app.

## Installation

Use these steps to install project

1. To start development mode: `yarn start`
2. To build project: `yarn build`
3. To serve built files: `yarn serve`

## Main Technologies and libraries

- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://nodejs.org/api/cluster.html">NodeJS cluster</a>
- <a href="https://koajs.com/#">KoaJS</a>
- <a href="https://babeljs.io/">Babel</a>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

Vlad Morzhanov

## License

#### (The MIT License)

Copyright (c) 2018 Vlad Morzhanov.
You can review license in the LICENSE file.

docker build -t nodejs-reverse-proxy-example/nodejs .

docker run -d nodejs-reverse-proxy-example/nodejs
