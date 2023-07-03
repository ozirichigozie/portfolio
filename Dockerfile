FROM nginx:1.10.1-alpine
COPY app/ /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off"] 
