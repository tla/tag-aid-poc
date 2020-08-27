This is an experimental interface for viewing variant text. Development was begun at the [Huygens Institute](http://huygens.knaw.nl/) in early 2016 in the context of a design sprint centred around the concept of "text-as-graph", particularly as used in the [Stemmaweb](https://stemmaweb.net/) tools.

This fork has updated the original proof of concept to use live data, and reworked it to be supported by the [Create React App](https://github.com/facebook/create-react-app) infrastructure.

## Setup

### Install Dependencies

Within the root directory, install dependencies required to run the application:  
```
npm install
```

### Environment Variables
1. Within the root directory, create a new file named `.env`. **It is highly recommended that this file be git-ignored in order to avoid committing sensitive data into version control.**
2. In the newly created `.env` file, add an environment variable for `PUBLIC_URL`
  1. Ex: `PUBLIC_URL=enter_url_here_with_no_spaces_or_quotes`
2. In the newly created `.env` file, add an environment variable for `REACT_APP_MAPBOX_TOKEN`
  1. Ex: `REACT_APP_MAPBOX_TOKEN=enter_token_here_with_no_spaces_or_quotes`
  2. A Mapbox token can be obtained from the [Mapbox website](www.mapbox.com) - see the "Access tokens" section of your Mapbox account page.

### API Configuration
1. Within the `/script` directory, create a new file named `lemma-html-config.json`.  **It is highly recommended that this file be git-ignored in order to avoid committing sensitive data into version control** - this is why we provide an example file (`lemma-html-config.json.example`), rather than the file itself, on GitHub.

2. In the newly created `lemma-html-config.json` file, add a JSON object with the following keys (be sure to update with your own values):

```
{
    "options": {
        "repository": "repository URL goes inside these quotes",
        "tradition_id": "tradition ID goes inside these quotes"
    },
    "auth": {
        "username": "API auth username goes inside these quotes",
        "password": "API auth password goes inside these quotes"
    }
}
```

**Note** - an example file, `lemma-html-config.json.example`, has been provided as an example.


### Data Generation

**Note** - order matters here, as some scripts rely on files generated in other scripts. The first script requires Python 3, as well as API authorization data (these are the same values added to the `lemma-html-config.json` file in the step above). Scripts may take several minutes to run.

Within the `/script` directory, run the following commands (in order):

```
python3 generate_svgs.py -r "https://api.editions.byzantini.st/ChronicleME/stemmarest" -u [enter API username in quotes] -p [enter API password in quotes] -t [tradition ID with NO quotes] -v
```


```
node generateDates.js
```


```
node generateManuscriptHtml.js
```

```
node generateStore.js
```

```
node generateLocationData.js
```

```
node generateAllWitnessLunrData.js
```

```
node generateLunrData.js
```

## Local Development
Run the application locally:
```
yarn start
```

## Deploying
**Within the project root directory:**
```
yarn build   
zip -r <buildID> build
scp <buildID>.zip edition@monitor.stemmaweb.net:.
```

**On the server:**  
```rm -rf build
unzip <buildID>
rm -rf www/*
cp -r build/* www
```
