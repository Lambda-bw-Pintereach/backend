# lambda-ft-pintereach-05

## Endpoints

## Login

**POST/api/auth/login**
-   {"username": "seye", 
    "password": "1234" }


## Register

**POST/api/auth/register**
    {"username": "seye", 
    "password": "1234" }


## Users

**GET/api/users**
[
    {
        "id": 1,
        "username": "seye",
        "password": "$2a$08$Sl8VMI4G6Lt1Z/GLi3jaU.IYbOh6r9A2TtbGItCMIbDQbwFXAY2k."
    }
]

## Article

**GET/api/articles**

[
    {
        "article_id": 1,
        "title": "new article",
        "preview": "This is testing",
        "story": "This testing is good",
        "category": "fashion"
    }
]

**POST/api/article**
    {
      "title": "new article",
     "preview": "This is testing",
      "story": "This testing is good", 
      "category": "fashion"
    }


