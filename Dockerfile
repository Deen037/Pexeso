# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Start Nginx when the container launches
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf > /tmp/nginx.conf && mv /tmp/nginx.conf /etc/nginx/nginx.conf && nginx -g 'daemon off;'"