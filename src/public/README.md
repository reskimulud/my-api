# My API

> My API for my portfolio. This is a simple documentation

Base URL : https://api.reskimulud.my.id

To retrieve the data, need a token for authorization.
  * Authorization : `Bearer <token>`
  > Token is private and can only be used by the owner

---

# About
## GET - Get all data About
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
## PUT - Update About
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

---

# Skills
## GET - Get all data Skills
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

## POST - Add skill
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

## PUT - Update Skill
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

## DELETE - Delete Skill
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

---

# Experiences

## GET - Get all data Experiences
> Get all experiences
  * URL: `/experiences`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Experiences data retrieved successfully",
  "data": {
    "experiences": [
      {
        "id": 7,
        "job_title": "Leader",
        "company_name": "Google Developer Student Clubs UMMI",
        "type": "Freelance",
        "start": 1627776000,
        "until": 0,
        "is_resigned": 0,
        "description": "<p>As a Google Developer Student Clubs Lead (GDSC Lead) on chapter Universitas Muhammadiyah Sukabumi</p>\r\n"
      },
      ...
    ]
  }
}
```

## POST - Add experience
> Add new experience data to backend
  * URL: `/experiences`
  * Request Body: `JSON`
    * `job_title`: `String`, **required**
    * `company_name`: `String`, **required**
    * `type`: `String`, **required**
    * `start`: `Int`, **required**
    * `until`: `Int`, **required**
    * `is_resigned`: `Int`, **required**
    * `description`: `String`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Experience added successfully",
  "data": {
    "id": 7
  }
}
```

## PUT - Update experience
> Update experience data by id
  * URL: `/experiences/{id}`
  * Request Body: `JSON`
    * `job_title`: `String`, **required**
    * `company_name`: `String`, **required**
    * `type`: `String`, **required**
    * `start`: `Int`, **required**
    * `until`: `Int`, **required**
    * `is_resigned`: `Int`, **required**
    * `description`: `String`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Experience updated successfully"
}
```

## DELETE - Delete experience
> Delete experience data by id
  * URL: `/experiences/{id}`
  * Request Body: `JSON`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Experience deleted successfully"
}
```

---

# Educations

## GET - Get all data Educations
  * URL: `/educations`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Educations data retrieved successfully",
  "data": {
    "educations": [
      {
        "id": 2,
        "degree": "Sekolah Menengah Atas",
        "school": "SMA Negeri 5 Kota Sukabumi",
        "start": 1464732000,
        "until": 1556661600,
        "is_graduated": 1,
        "description": "Lorem ipsum"
      },
      ...
    ]
  }
}
```

## POST - Add education
> Add new education data to backend
  * URL: `/educations`
  * Request Body: `JSON`
    * `degree`: `String`, **required**
    * `school`: `String`, **required**
    * `start`: `Int`, **required**
    * `until`: `Int`, **required**
    * `is_graduated`: `Int`, **required**
    * `description`: `String`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Education added successfully",
  "data": {
    "id": 2
  }
}
  ```

## PUT - Update education
> Update education data by id
  * URL: `/educations/{id}`
  * Request Body: `JSON`
    * `degree`: `String`, **required**
    * `school`: `String`, **required**
    * `start`: `Int`, **required**
    * `until`: `Int`, **required**
    * `is_graduated`: `Int`, **required**
    * `description`: `String`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Education updated successfully"
}
```

## DELETE - Delete education
> Delete education data by id
  * URL: `/educations/{id}`
  * Request Body: `JSON`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Education deleted successfully"
}
```

---

# Services

## GET - Get all data Services
  * URL: `/services`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Services data retrieved successfully",
  "data": {
    "services": [
      {
        "id": 1,
        "name": "Web Development",
        "description": "Lorem ipsum",
        "icon": "fa fa-laptop"
      },
      ...
    ]
  }
}
```

## POST - Add service
> Add new service data to backend
  * URL: `/services`
  * Request Body: `JSON`
    * `name`: `String`, **required**
    * `description`: `String`
    * `icon`: `String`, **required**
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Service added successfully",
  "data": {
    "id": 1
  }
}
  ```

## PUT - Update service
> Update service data by id
  * URL: `/services/{id}`
  * Request Body: `JSON`
    * `name`: `String`, **required**
    * `description`: `String`
    * `icon`: `String`, **required**
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Service updated successfully"
}
```

## DELETE - Delete service
> Delete service data by id
  * URL: `/services/{id}`
  * Request Body: `JSON`
  * Response: `JSON`

```json
{
  "status": "success",
  "message": "Service deleted successfully"
}
```

---