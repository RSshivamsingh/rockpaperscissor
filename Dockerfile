# Step 1: Use a lightweight Nginx image
FROM nginx:alpine

# Step 2: Set the working directory to Nginx's default html folder
WORKDIR /usr/share/nginx/html

# Step 3: Remove existing default files
RUN rm -rf ./*

# Step 4: Copy your HTML and CSS files from the current directory to the container
COPY index.html

# Step 5: Expose port 80 to the outside world
EXPOSE 80

# Step 6: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
