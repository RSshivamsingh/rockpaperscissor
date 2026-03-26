Web Application Deployment using Docker & AWS EC2

Introduction

In modern software development, the "it works on my machine" problem is a significant hurdle for deployment. This project demonstrates a professional-grade solution by combining Containerization with Cloud Infrastructure.
The objective was to take a standard web application, package it into a portable Docker image, and deploy it onto a scalable AWS EC2 instance. By using an Amazon Web Services (AWS) environment, the application is moved from a local development state to a globally accessible production environment.
Key Objectives:
Infrastructure Provisioning: Deploying and configuring a virtual Linux server (Ubuntu) via AWS.
Containerization: Using Docker to create a lightweight, consistent environment for the web server (Nginx).
Networking: Configuring AWS Security Groups to allow public web traffic (Port 80).
Cloud Best Practices: Implementing secure SSH access and managing cloud resources efficiently.

Tech Stack & Infrastructure Architecture 
To ensure the application is portable, scalable, and secure, the following technologies were integrated into the deployment pipeline:
The Core Stack:
Cloud Provider: Amazon Web Services (AWS) — Used for on-demand computing resources and global infrastructure.
Containerization: Docker — Used to package the application and its dependencies (Nginx) into a single, immutable image.
Operating System: Ubuntu 24.04 LTS (Linux) — Chosen for its stability and extensive support for Docker environments.


Web Server: Nginx (Alpine-based) — A high-performance, lightweight web server used to serve static content.
Version Control: GitHub — Used for source code management and pulling the project onto the EC2 instance.
 
The Architecture Flow:
The deployment follows a standard DevOps "Build → Ship → Run" workflow:
Build: A Dockerfile is created to define the environment.
Ship: The image is built on the EC2 instance (or pushed to Docker Hub).
Run: Docker maps the internal container port (80) to the AWS EC2 public port (80), making the site live.

Step-by-Step Implementation 
The deployment was executed in four distinct phases: Infrastructure Provisioning, Environment Setup, Containerization, and Global Deployment.

Phase I: AWS Infrastructure Provisioning
IAM Login: Authenticated via the AWS Management Console.
EC2 Launch: Configured an Ubuntu 24.04 LTS instance on a t2.micro (Free Tier) type. (you can choose any linux as per flavor ).
Networking (Security Groups): Defined firewall rules to allow:
SSH (Port 22): For remote terminal access.
HTTP (Port 80): To allow public web traffic to reach the Docker container.
Key Pair: Generated and downloaded project-key.pem for secure RSA encryption. Click on launch.
Phase II: Server Access & Environment Setup
chmod 400 project-key.pem
ssh -i "project-key.pem" ubuntu@<EC2-Pub	lic-IP>	
Docker Installation	
sudo apt update && sudo apt install docker.io -y
Permissions Management
sudo usermod -aG docker ubuntu 
Check docker is working properly 
docker rum hello-world 
Check status of docker daemon 
sudo systemctl status docker
(then you need to logout and login again)

Phase III: Containerization Strategy (The Dockerfile)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY index.html .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

Phase IV: Login Docker
docker login 

Phase V: Build & Deployment Workflow
Code Retrieval: Cloned the web application source code from GitHub.
Image Build: Built the Docker image locally on the EC2 instance:
docker build -t username/filename:latest .
Here, tag-> latest 
Verify Docker image : docker images
Run docker run -d -p 80:80 username/filename:latest 
Pushing image ->
docker push your-dockerhub-username/filename

Results & Verification
Live Deployment Verification
The final deployment was verified by accessing the EC2 Public IP address in a standard web browser.
URL: http://<Your-EC2-Public-IP>
Status: Success. The Nginx server inside the Docker container correctly served the index.html file via Port 80.

Screenshots of all working :YOU CAN IN PDF LINK GIVEN

>> https://drive.google.com/file/d/1d5wkDgmIcG-WqOhe-n1qiT2K9ojedlDJ/view?usp=sharing

Conclusion & Resource Management
This project successfully demonstrated the "Build once, run anywhere" philosophy of Docker. By deploying on AWS EC2, I gained practical experience in cloud networking, security groups, and remote server management.


Congratulations on deploying your first containerized image on AWS!


Thankyou !
Project By:
SHIVAM KUMAR SINGH 

