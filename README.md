## After installing Docker:
Simply run the following commands to deploy this webpage on your VM or local server:
- Build the image:
`docker build https://github.com/ozirichigozie/portfolio.git#main`
- Run the image's container in detached mode exposing port 80 on host machine to port 80 on the container:
`docker run -d -p 80:80 <image-id>`
Finally, paste your VM's IP address on your web browser to view this webpage or localhost:80 if you are running this on your local machine.

## After installing docker-compose:
Simply run `docker-compose up -d` then go to localhost:8000 if you are running this on your local machine or your_server_domain_or_ip:8000 to view the webpage.
