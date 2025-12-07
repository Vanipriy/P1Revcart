pipeline {
    agent any

    tools {
        maven 'M3'   // Jenkins Maven installation name
    }

    environment {
        IMAGE_NAME = "revcart-backend"
        DOCKER_HUB_USER = "vanipriy"  // Make sure this matches your DockerHub username EXACTLY (lowercase)
    }

    stages {

        stage('Checkout code') {
            steps {
                git branch: 'master', url: 'https://github.com/Vanipriy/P1Revcart.git'
            }
        }

        stage('Build Backend JAR') {
            steps {
                dir('backend') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Image') {
    steps {
        dir('backend') {
            script {
                def jarFile = bat(returnStdout: true, script: 'for %i in (target\\*.jar) do @echo %i').trim()
                def imageName = "${DOCKER_HUB_USER}/${IMAGE_NAME}:latest"
                
                echo "Using JAR file: ${jarFile}"
                echo "Docker Image: ${imageName}"
                
                bat "docker build -t ${imageName} --build-arg JAR_FILE=${jarFile} ."
            }
        }
    }
}



        stage('Docker Login') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') { }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.image("${DOCKER_HUB_USER}/${IMAGE_NAME}:latest").push()
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
