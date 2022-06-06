# My API

> My API for my portfolio. This is a simple documentation

Base URL : https://api.reskimulud.my.id

## About
### GET - Get all data About
> Get about me
  * URL : `/about`
  * Response : `JSON`

```json
{
  status: "success",
  message: "About data retrieved successfully",
  data: {
    about: {
      ...
    }
  }
}
```
### PUT - Update About
> Update about me
  * URL : `/about/{id}`
  * Request Body : `JSON`
    * `name` : `String`, **required**
    * `email` : `String`, **required**
    * `description` : `String`, **required**
    * `address` : `String`, **required**
    * `gmaps` : `String`
    * `telp` : `Number`
    * `github` : `String`
    * `facebook` : `String`
    * `instagram` : `String`
    * `twitter` : `String`
    * `pinterest` : `String`
    * `linkedin` : `String`
    * `image` : `String`, **required**
  * Response : `JSON`
```json
{
  "status": "success",
  "message": "About data updated successfully"
}
```

## Skills
### GET - Get all data Skills
> Get all skills
  * URL : `/skills`
  * Response : `JSON`

```json
{
  "status": "success",
  "message": "Skills data retrieved successfully",
  "data": {
    "skills": [
      {
        "id": 1,
        "category_name": "Programming Language",
        "position": 1,
        "skills": [
          {
            "id": 1,
            "skill": "PHP",
            "percentage": 79,
            "category_id": 1
          }
          ...
        ]
      }
    ]
  }
}
```

### POST - Add skill
> Add a new data skill to backend
  * URL: `/skills`
  * Request Body: `JSON`
    * `skill`: `String`, **required**
    * `percentage`: `Int`, **required**
    * `category_id`: `Int`, **required**
  * Response: `JSON`
  ```json
  {
    "status": "success",
    "message": "Skill added successfully",
    "data": {
      "id": 1
    }
  }
  ```

### PUT - Update Skill
> Update data skill by id
  * URL: `/skills/{id}`
  * Request Body: `JSON`
    * `skill`: `String`, **required**
    * `percentage`: `Int`, **required**
    * `category_id`: `Int`, **required**
  * Response: `JSON`
  ```json
  {
    "status": "success",
    "message": "Skill updated successfully"
  }
  ```

### DELETE - Delete Skill
> Delete data skill by id
  * URL: `/skills/{id}`
  * Request Body: `JSON`
  * Response: `JSON`
  ```json
  {
    "status": "success",
    "message": "Skill deleted successfully"
  }
  ```

## Educations