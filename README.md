# My API

> My API for my portfolio. This is a simple documentation

Base URL : https://api.reskimulud.my.id/

## About
### Method : GET - Get all data About
> Get about me
  * URL : `/about`
  * Response : `JSON`

```
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
### Method : PUT - Update dat About
> Update about me
  * URL : `/about/{id}`
  * Request Body : `JSON`
    * `name` : `String`, required
    * `email` : `String`, required
    * `description` : `String`, required
    * `address` : `String`, required
    * `gmaps` : `String`
    * `telp` : `Number`
    * `github` : `String`
    * `facebook` : `String`
    * `instagram` : `String`
    * `twitter` : `String`
    * `pinterest` : `String`
    * `linkedin` : `String`
    * `image` : `String`, required
  * Response : `JSON`
```
{
  'status': 'success',
  'message': 'About data updated successfully'
}
```

## Skills
### Method : GET - Get all data Skills
> Get all skills
  * URL : `/skills`
  * Response : `JSON`

```
{
  status: "success",
  message: "Skills data retrieved successfully",
  data: {
    skills: [
      {
        id: 1,
        category_name: "Programming Language",
        position: 1,
        skills: [
          {
            id: 1,
            skill: "PHP",
            percentage: 79,
            category_id: 1
          }
        ]
      }
    ]
  }
}
```