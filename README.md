# Tiny-OTP
## The browser-based Google-Authenticator compatible OTP generator.

Tiny-OTP is a tiny(4kb) Javascript library that can generate [RFC 4226](https://tools.ietf.org/html/rfc6238) compliant HMAC-based one-time passwords (HOTPs), and [RFC 6238](https://tools.ietf.org/html/rfc6238) compliant time-based one-time passwords (TOTPs).

### Usage

```javascript
// Generate a random secret
const secret = OTP.getRandomInt(0, 10 ** 12)

// Initialize OTP generator with secret
const generator = new OTP(secret)

// Get the current 6-digit TOTP value.
// This value will change every 30 seconds.
let totp = generator.getTOTP()

// Get current 6-digit HOTP value.
// This value will be change based on the provided counter parameter value.
let hotp = generator.getHOTP(5)
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
<script src="https://cdn.patricktriest.com/vendor/otp/otp.min.js"></script>
```

##### Base32 Compatibility
Google Authenticator requires secrets to be imported as base32 encoded strings.  Tiny-OTP uses UTF-8 encoding by default, but contains helpers to import and export base32 encoded secrets.

To import a base32 encoded secret.
```javascript
const generator = new OTP(secret, 'base32')
```

To export the secret in base32 encoding.
```javascript
generator.getBase32Secret()
```


#### Distribution Test
To verify that the OTP generates a valid random(flat) distribution of possible 6-digit OTP values, the `test` directory contains a simple webpage + webworker that will generate batches of 50,000 OTPs, and continuously plot the distribution.  To view this visualization, run `http-server .` and open `http://localhost/test/`.

You can also view this distribution test at `https://cdn.patricktriest.com/vendor/otp/test/index.html`