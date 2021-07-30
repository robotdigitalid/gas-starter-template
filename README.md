# Gmail Automation

This service is use for filter and forward mail inbox specially Gmail inboxes to whatsapp messages.

## 1. Prerequisite

- NodeJS
- NPM

## 2. Creating New Project

- ### Init New Project

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
    
  - Get `appsscript.json` file from GAS
    ```shell
    clasp pull
    ```
  
  - Create new file `Kode.js` in root folder and write this code
    ```javascript
    const test = () => {
      Logger.log("Test")
    }
    ```
  
  - Add script to `package.json`
    ```json
    {
      "scripts": {
        "push": "clasp push -f",
        "build": "clasp deploy --deploymentId <your-deployment-id>"
      }
    }
    ```

- ### Setup GitHub Workflows

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

- ### Create GitHub Repository

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

## 3. Using This Starter Template

- Clone this repository
  ```shell
  git clone https://github.com/robotdigitalid/gas-starter-template.git
  ```
  
- Install Dependencies
  ```shell
  npm install
  ```
  
- Write your code

| Item          | Price          | Qty   | Total        |
|...............|...............:|:.....:|.............:|
| Laptop        | @Rp  7.000.000 | x  5  | = 35.000.000 |
| Server        | @Rp  4.000.000 | x  1  | =  4.000.000 |
| Internet      | @Rp    500.000 | x 12  | =  6.000.000 |
| Tempat        | @Rp 15.000.000 | x  1  | = 15.000.000 |
| Meja & Kursi  | @Rp  1.000.000 | x  5  | =  5.000.000 |
