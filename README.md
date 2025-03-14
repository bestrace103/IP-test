# IP Test Server

## Overview

The IP Test Server is a simple web application designed to test the geographic location and restrictions of IP addresses. It allows developers and system administrators to check whether their server or application is accessible from different regions or countries based on IP addresses.

## Features

- Test the geolocation of IP addresses.
- Check for region-specific IP restrictions.
- Simple API interface for automated IP testing.
- Support for IP blocking/unblocking based on geolocation.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ip-test-server.git
   ```

2. Navigate to the project folder:
   ```bash
   cd ip-test-server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

   Or if you're using yarn:
   ```bash
   yarn install
   ```

4. Configure the `.env` file with necessary settings (e.g., API keys for geolocation services).

5. Run the server:
   ```bash
   npm start
   ```

   Or with yarn:
   ```bash
   yarn start
   ```

   This will start the server on port 3000 by default.

## API Documentation

### Get IP Geolocation

**Endpoint:**
```
GET /api/ip-location/:ip
```

**Parameters:**
- `ip`: The IP address you want to check.

**Response:**
```json
{
  "ip": "8.8.8.8",
  "location": {
    "country": "United States",
    "region": "California",
    "city": "Mountain View"
  }
}
```

### Block/Unblock IP

**Endpoint:**
```
POST /api/block-ip
```

**Parameters:**
- `ip`: The IP address to block or unblock.
- `action`: `"block"` or `"unblock"`

**Response:**
```json
{
  "message": "IP blocked successfully"
}
```

## Running Tests

To run the test suite, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

