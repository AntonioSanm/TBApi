# TempBuddy API
This is a RESTful API written in NodeJS with a MongoDB database which fulfills the problems presented on the PDF document.

## Usage
Install with docker

```bash
$ docker-compose build
```
Once installed the docker virtual dependencies, start the application with:
```bash
$ docker-compose up
```

## API Endpoints
The port exposed is the 8000 so all petitions should be against localhost/8000. On the project folder there is a [Postman](https://www.getpostman.com/apps) collection (TempBuddy.postman_collection.json) already created with all the api enpoints, which really eases the proccess of testing them. It only needs to be imported on the Postman app itself.

### POST /worker/v1/matching
1) REQUIRED: Provide an API endpoint that receives a list of workers and a list of shifts and returns the optimal list of matchings. A list of matchings is optimal when the number of unmatched shifts is the minimum possible.

Content-Type: application/json

Example POST value:
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

### POST /worker/v2/matching
2) EXTRA: Extend the previous API endpoint so it also accounts for each worker payrate, to provide an optimal list of matchings. In this scenario, a list of matching is optimal when the number of unmatched shifts is the minimum possible and the aggregated payrate of all the matched workers (total cost) is the minimum possible.

Content-Type: application/json

Example POST value:
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


### GET /worker/v3/matching
3) EXTRA: /matching endpoint will then return the optimal matching based on the information existing on the database when called.


## Basic CRUD for Worker

### GET /worker/v3/get
Get a list with all workers on the database

### POST /worker/v3/create
Create a new worker

Content-Type: application/json

Example POST value:
```javascript
{
    "id": 4,
    "availability": ["Thursday"],
    "payrate": 12.25
}
```

### PUT /worker/v3/update/:id
Updates a worker (USES THE MONGO ID, ex: /worker/v3/update/5bba642b8d8d483f0d68cdab)

Content-Type: application/json

Example POST value:
```javascript
{
    "payrate": 11.25
}
```

### DELETE /worker/v3/update/:id
Deletes a worker (USES THE MONGO ID, ex: /worker/v3/delete/5bba642b8d8d483f0d68cdab)

## Basic CRUD for Shift

### GET /shift/v3/get
Get a list with all shifts on the database

### POST /shift/v3/create
Create a new shift

Content-Type: application/json

Example POST value:
```javascript
{
    "id": 3,
    "day": ["Wednesday"]
}
```

### PUT /shift/v3/update/:id
Updates a shift (USES THE MONGO ID, ex: /shift/v3/update/5bba642b8d8d483f0d68cdab)

Content-Type: application/json

Example POST value:
```javascript
{
    "day": ["Monday"]
}
```

### DELETE /shift/v3/update/:id
Deletes a shift (USES THE MONGO ID, ex: /shift/v3/delete/5bba642b8d8d483f0d68cdab)
