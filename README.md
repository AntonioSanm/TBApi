# TempBuddy API
This is a RESTful API written in NodeJS with a MongoDB database which fulfills the problems presented on the PDF document.

## Usage
Install with docker

```bash
$ docker-compose build
```
Once installed the docker virtual dependencies, start it with:
```bash
$ docker-compose up
```

## API Endpoints
The port exposed is the 8000. On the project folder there is a ### [Postman](https://www.getpostman.com/apps) collection already created with all the api enpoints, which really eases the proccess of testing them. It only needs to be imported on the app itself.

### POST /workers/v1/matching
1) REQUIRED: Provide an API endpoint that receives a list of workers and a list of shifts and returns the optimal list of matchings. A list of matchings is optimal when the number of unmatched shifts is the minimum possible.

Content-Type: application/json

Example value:
```javascript
{
  "workers": [
    {
      "id": 1,
      "availability": ["Monday", "Wednesday", "Friday"],
      "payrate": 7.50
    },
    {
      "id": 2,
      "availability": ["Tuesday", "Thursday"],
      "payrate": 9.00
    },
    {
      "id": 3,
      "availability": ["Monday", "Tuesday", "Friday"],
      "payrate": 8.00
    },
    {
      "id": 4,
      "availability": ["Thursday"],
      "payrate": 12.25
    }
  ],
  "shifts": [
    {
      "id": 1,
      "day": ["Monday"]
    },
    {
      "id": 2,
      "day": ["Tuesday"]
    },
    {
      "id": 3,
      "day": ["Wednesday"]
    }
  ]
}
```