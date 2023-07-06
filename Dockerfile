# Base image
FROM nginx:alpine

# Copy the current working dir to the container's nginx dir.
# Files listed in the .dockerignore file will not be added.
COPY . /usr/share/nginx/html
