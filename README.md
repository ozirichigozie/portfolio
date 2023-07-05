![cover_photo](img/architectural_diagram.png)
# An NGINX, Docker-Containerized Portfolio Web Application
This is a simple demo of the process of containerization of web applications using Docker. It is aimed at giving DevOps beginners the basic understanding of how to use `docker` and `docker-compose` to build Docker Images and push those images to a container registry - DockerHub.

Here, I have used my personal portfolio website which I created with a BOOTSTRAP template to facilitate this demo. This website is served with NGINX, containerized with Docker, and saved in DockerHub. 

Also, this repository uses a GitHub Action to automate the Docker Build and Push workflow of this web app.

> You can preview this website [here](https://ozirichigozie.github.io/portfolio/).
> Leave a review at the contact form (powered by [FormSubmit](https://www.formsubmit.co)) within the website.
> Find anything you would like to changed or improve on? Please leave a message or create a Pull Request.

## Prerequisites 
To follow the deployment procedures explained in this repository you need to have 
- Docker and docker-compose installed on your workstation.
- Basic knowledge on the Linux OS and the use of Docker commands.
- An account on DockerHub will also come in handy if you intend to activate the GitHub Action Workflow in this repository.

## Deployment Options
You may use any one of the following methods to deploy this application to your local server or virtual machine. After option 1 or 2, visit the website at your **IP_address:80 or localhost:80** if you are running it on your local machine. For option 3, this will be at **IP_address:8000 or localhost:8000.**

### 1. Docker Pull 
Use the Docker Image from `docker.io/ozirichigozie/app_portfolio:latest` by running: 
 
```
docker pull ozirichigozie/app_portfolio
docker run -d -p 80:80 ozirichigozie/app_portfolio
```
The `-p` flag maps port 80 on the host machine to port 80 on the container, while the `-d` flag ensures it runs in detached mode.

### 2. Docker Build
Build the Image yourself, and Run it: Execute the following commands - 

```
docker build https://github.com/ozirichigozie/portfolio.git#main
docker image ls
docker run -d -p 80:80 <image_id>
```
 
### 3. Docker-Compose
To use docker-compose ensure you have **docker-compose** installed along with Docker.
- First, clone this git repository to your project's working directory (I have named mine "portfolio"). Run, `git clone https://github.com/ozirichigozie/portfolio.git portfolio`.
- Slide into the project's directory with `cd portfolio`.
- Within the project's working directory, run `docker-compose up -d`. The `docker-compose.yml` file within the project's directory will be identified and used to build and run a container.

> - To stop your container: run `docker ps` to get the `<CONTAINER ID>`, then run `docker stop <CONTAINER ID>` to stop it.
> - To remove the container, run `docker rm <CONTAINER ID>`.
> - Run `docker images` to view the docker `<IMAGE ID>`, and `docker rmi <IMAGE ID>` to remove the image.
> - If you used docker-compose, run `docker-compose down` in the project's working directory to stop and remove the container. Then `docker rmi <IMAGE ID>` to remove the docker image.
>

## The GitHub Action Workflow
The GitHub Action used in this repository ensures that on push of code updates to this repo, the Docker Image is built and pushed to DockerHub. You can find more of this in the [GitHub Actions Marketplace](https://github.com/marketplace). With this, my Docker Image stays up to date anytime I make any changes to my portfolio website. The secret parameters you see in the `.github/workflows/docker-image.yml` file have been provided as configuration secrets specifically for this repository. You can find this by going to **Settings > Secrets and Variables > Actions.** To create your `DOCKERHUB_TOKEN`, login to your [DockerHub account](https://hub.docker.com) and go to **Account Settings > Security > New Access Token.** Give your access token at least **Read** & **Write** permissions, then copy and save it. Note that you will not have access to this token again once you exit the window.