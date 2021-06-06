# Gmail Automation

This service is use for filter and forward mail inbox specially Gmail inboxes to whatsapp messages.

## 1. Prerequisite

- NodeJS
- NPM

## 2. Creating New Project

- Init NodeJS project
  ```shell
  npm init -y
  ```

- Install `clasp` as dev dependencies
  ```shell
  npm install --dev @google/clasp
  ```

- Install GAS autocomplete
  ```shell
  npm install --save @types/google-apps-script
  ```

- Create new GAS project
  ```shell
  clasp create --name <project-name>
  ```

- Get Deployment ID
  ```shell
  clasp deploy --description auto
  ```

- Create new file `Kode.js` in root folder and write this code
  ```javascript
  const test = () => {
    Logger.log("Test")
  }
  ```

## 3. Setup GitHub Workflows

- Create file `.github/workflows/gas-delivery.yaml` and paste this code
  ```yaml
  name: Google App Script Integration

  on:
    push:
      branches: [ master ]
    pull_request:
      branches: [ master ]
  
  jobs:
    build:
      runs-on: ubuntu-latest
    
      strategy:
        matrix:
          node-version: [ 12.x ]
    
      steps:
        - uses: namaggarwal/clasp-token-action@v0.0.1
          with:
            client-id: ${{ secrets.CLIENT_ID }}
            client-secret: ${{ secrets.CLIENT_SECRET }}
            refresh-token: ${{ secrets.REFRESH_TOKEN }}
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v2
          with:
            node-version: ${{ matrix.node-version }}
        - run: npm install
        - run: npm run push
        - run: npm run build
  ```

## 4. Create GitHub Repository

- Create GitHub account `if not exist`
- Create GitHub repository [here](https://github.com/new)
- Add GitHub Actions Secrets on your repository *Settings > Secrets > New repository secret*
  ```yaml
  CLIENT_ID: xxx
  CLIENT_SECRET: xxx
  REFRESH_TOKEN: xxx
  DEPLOYMENT_ID: xxx
  ```

- Push code to your repository
  ```shell
  git init
  git add .
  git commit -m "Initial GAS project"
  git remote add origin <your-repository-url>
  git push origin master
  ```
