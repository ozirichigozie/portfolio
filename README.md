# My Personal Portfolio created with BOOTSTRAP

> Visit site at: https://ozirichigozie.github.io/portfolio/
> Leave a review at the contact form within the website.
> Find anything you would like to changed or improve on? Please let me know.

## THANK YOU!

### Once you have Docker installed, to deploy this website to your server or local machine, you can either:
1. Use the Docker Image from `docker.io/ozirichigozie/portfolio-app:latest` by running: 
 
```
docker pull ozirichigozie/portfolio-app
docker run -d -p 80:80 ozirichigozie/portfolio-app
```
Then visit site at your_domain_or_IP_address:80 or localhost:80 if you are running it on your local machine.

2. Build the Image, and Run it: Execute the following commands - 

```
docker build https://github.com/ozirichigozie/portfolio.git#main
docker image ls
docker run -d -p 80:80 <image_id>
```
Then visit the website at your_domain_name_or_IP_address:80 or localhost:80 if you are running it on your local machine.
 
3. Use docker-compose: (Ensure you have docker-compose installed along with Docker)
- Clone this git repository to a dedicated working directory of your choice
`git clone https://github.com/ozirichigozie/portfolio.git portfolio`
- Slide into the project's directory
`cd portfolio`
- Run the docker-compose command. This would identify the `docker-compose.yml` file within the project's directory, build and run a container with it.
`docker-compose up -d`

Then visit the website at your_domain_name_or_IP_address:8000 or localhost:8000 if you are running it on your local machine.
