# Swift iOS project + react native

Not super happy with some of these discoveries...

## How to set up this project

Run the following steps in a terminal (assuming you have already cocoapods installed... otherwise you need to run `brew install cocoapods`)

```sh
$ yarn
$ tsc
$ cd ios
$ pod install
```

or the following if you don't want to copy three times...

```sh
$ yarn && tsc && cd ios/ && pod install
```

What it does is to set up your `node_modules` folder and install react-native pods.

Once it has finished, open the file:

```
./node_modules/react-native/Libraries/WebSocket/RCTReconnectingWebSocket.m
```

You will need to change the line `#import <fishhook/fishhook.h>` to `#import <React/fishhook.h>`... why? because it seems facebook does not check the code they are releasing and it causes issues...

__THIS CODE CAN NOT BE COMMITED TO A CI SERVER AS YOU WILL HAVE TO CHANGE YOUR NODE_MODULES FOLDER__
