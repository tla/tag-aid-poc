This is an experimental interface for viewing variant text. Development was begun at the [Huygens Institute](http://huygens.knaw.nl/) in early 2016 in the context of a design sprint centred around the concept of "text-as-graph", particularly as used in the [Stemmaweb](https://stemmaweb.net/) tools.

This fork has updated the original proof of concept to use live data, and reworked it to be supported by the [Create React App](https://github.com/facebook/create-react-app) infrastructure.

## Data requirements

The interface expects a store of variant text data in the `public/data` directory. This should consist of:

* a file, `sections.json`, containing a JSON array of objects. Each object needs an `id` and a `name` key; any other keys will be ignored. Each section represents an individual segment of collated text.
* a directory for each section, named according to its ID. Within this directory there should be:
  * `readings.json` - a JSON file containing the complete set of readings for the section. The reading objects must have an `id` and a `text` key; they may also have a `normal_form` key (which overrides `text`) and a pair of keys `join_prior` and `join_next`; if either of these is set to a true value, the reading will be rendered in the running text without a space between it and the prior / next reading. All other object keys will be ignored.
  * `graph.svg` - a file containing the SVG graph to display. The readings must be represented as `<g>` elements with class `node` and with an `xml:id` that corresponds to the reading ID prefixed with an `n`. (For example, if there is a reading with ID `123`, there must be an element in the SVG that looks like `<g xml:id="n123" class="node">...</g>`.)


## Available Scripts

In the project directory, you can run:

### `script/generate_data.py`

Generates the data necessary for the interface, from a running [Stemmarest](https://github.com/DHUniWien/tradition_repo) instance.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
