## Overview

### Dev 
___

1. run **dev-up.bat**

What runs in dev.bat?

- docker triggers the build contexts in compose.dev.yml, which is only the backend service. The backend wagtail app is built here. 
- The the services in compose.dev.yml are started in order: db, backend. The volumes also get created here, if they do not exist already. In the dev environment, only db and backend are containerized. The backend is exposed to localhost at port 8000.
- the frontend nextjs app is run here.

TODO: insert image




### backend: wagtail
___
Starting up virtual environment on backend.

`\backend\venv\scripts\activate`

Firing up backend dev server.

navigate into cms folder.

run `python manage.py runserver`

### frontend: nextjs
___

Navigate to frontend folder.

run `npm run dev`