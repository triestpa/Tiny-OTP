# Tiny-OTP
## The 4kb Google-Authenticator compatible OTP generator.

### Usage

```javascript
// Generate a random secret
const secret = OTP.getRandomInt(0, 10 ** 12))

// Initialize OTP generator
const generator = new OTP(secret)

// Get the current 6-digit OTP value
let currentOTP = generator.getTOTP()
```

#### NPM / Browserify / Webpack

##### Install
```
npm install tiny-otp
```

##### Import
```javascript
const OTP = require('tiny-otp')
```


#### Browser Script Tag

##### Import
```html
<script src="bundle.js"></script>
```
