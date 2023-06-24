# UberClone

## Environment Variables

Create a .env file and add keys listed below to the file.

- GOOGLE_MAPS_API_KEY: Enable Directions, Distance Matrix and Places APIs on Google Cloud. Create an API key and use it here.

## Instruction to Run App on Simulator/Emulator

1. Install npm dependencies by running `$ yarn` command.

### iOS

1. Enable Maps SDK for iOS API.
1. Replace `[YOUR_API_KEY]` placeholder with your api key in `AppDelegate.mm` file.
1. Install iOS dependencies by running `$ npx pod-install` command.
1. Run `$ yarn ios` command to run the app on iPhone 14 Pro Max simulator. You can edit ios script on package.json file to run the app another iPhone model.

### Android

1. Enable Maps SDK for Android API.
1. Replace `[YOUR_API_KEY]` placeholder with your api key in `AndroidManifest.xml` file.
1. Run `$ yarn android` command to run the app on an Android emulator. (MAKE SURE YOUR DEVICE OR EMULATOR HAS GOOGLE PLAY SERVICES INSTALLED)

## Video

https://github.com/chsdwn/UberCloneApp/assets/13810855/44c1c2d8-79d3-4c75-b23c-d30639c7e8c2
