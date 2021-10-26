Test API using Postman:

url connect database mongo: mongodb://localhost/express-demo

Start project using command line: "npm start"

    #List all user
        method: GET
        url: http://localhost:3000/api/users/
    
    #Create users
        method: POST
        url: http://localhost:3000/api/users/create/
        param:
            dummy data:
                [
                    {
                        "email": "dangvth@gmail.com",
                        "password": "123456",
                        "name": "DangVTH",
                        "phone": "0868124561"
                    },
                    {
                        "email": "hoang@gmail.com",
                        "password": "741953",
                        "name": "Hoang",
                        "phone": "0868789452"
                    },
                    {
                        "email": "Tuan@gmail.com",
                        "password": "1452365",
                        "name": "Tuan",
                        "phone": "0868787454"
                    }
                ]

    #View Detail user
        method: GET
        url: http://localhost:3000/api/users/_id

        _id copy from mongodb get _id user you want view detail

    #Search User by name
        method: Get
        url: http://localhost:3000/api/users/search?q=name

        name is name in db example if you want search User has name = Ky you can search k or y or ky or KY or Ky or kY

    #Update User
        method: PUT
        url: http://localhost:3000/api/users/update
        
        param: 
            example data get "_id" from user you want update
                {
                    "_id": "6177696079fa933342ec8478",
                    "email": "Linh@gmail.com",
                    "password": "123456",
                    "name": "Linh",
                    "phone": "0868772887"
                }

    #Delete User
        method: delete
        url: http://localhost:3000/api/users/delete

        param
            get object you want delete from mongodb
            example:
                {
                    "_id": "6177ca0998f77cce33d79226",
                    "email": "Tuan@gmail.com",
                    "password": "1452365",
                    "name": "Tuan",
                    "phone": "0868787454",
                    "__v": 0
                }