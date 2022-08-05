REST API construída con PERN stack.
Back end using JS with Node.js, Express, ORM: Sequelize, Postgresql.

Creo una db en psql.
Construyo proyectos con los schemas de Sequelize.
Creo tareas con los schemas de Sequelize.
Cada proyecto está en relación de uno a muchos con las tareas.

Utilizo los verbos HTTP: GET, POST, PUT y DELETE.

Los proyectos y las tareas tienen sus rutas definidas de acuerdo al verbo HTTP.

Hay una ruta que combina proyectos y tareas: nos devuelve las tareas de un id de proyecto.

Modularización.
    Utilizo al máximo la modularización que me permite la tecnología. Esto facilita la comprensión de cada módulo, evitando código spaghetti.

ORM.
    Utilizo ORMs, en este caso Sequelize, porque me facilita en extremo la utilización de SQL.
    Por ejemplo, en lugar de repetir sentencias SQL para cada user, hago un schema o model de la entidad
    'user' y ya puedo crear diversos user con el mismo schema inicial.

GIT.
    Utilizo un sistema de control de versiones, en este caso git, porque me permite un trabajo en equipo
    más limpio, rápido y seguro. Podemos volver a versiones anteriores, trabajar en ramas, mergearlas, etc.

.gitignore
    Utilizo esta carpeta porque me permite evitar compartir con otros o subir a github archivos y carpetas innecesarios de compartir como node_modules o .env, que contienen dependencias o datos sensibles.
    En texto plano pongo el nombre de los archivos que no quiero compartir o subir.

.ENV
    Utilizo este objeto porque me permite evitar que se vean las claves y datos sensibles de mi aplicación, como usuario y clave de mi database, etc. a cambio de utilizar y mostrar variables.
    Pongo en texto plano las variables y sus valores, x ej DB_USER: 'moncho'

Postgres
    Utilizo Postgres como database en este proyecto.
    En la shell psql '\l' (alt92+l) para ver qué db están creadas y 'create database (+ nombre q le pongo);'

SRC
    Carpeta dentro de la cual estará mi código, creo subcarpetas routes, models, database y controllers.
    También en src creo los archivos:
    app.js: instancio y exporto express con nombre app, traigo archivos que contienen rutas para cada model
    index.js:   traigo la instancia de app y la de sequelize q hago en database.js
                dentro de una function async, a la instancia de sequelize le meto el método sync()
                Pongo a escuchar en puerto PORT las peticiones del cliente.