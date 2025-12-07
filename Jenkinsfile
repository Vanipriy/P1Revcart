pipeline {
    agent any

    environment {
        IMAGE_NAME = "revcart-backend"
        DOCKER_HUB_USER = "Vanipriy" // change this
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
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('backend') {
                    script {
                        def jarFile = sh(script: "ls target/*.jar", returnStdout: true).trim()
                        sh """
                            docker build -t vanipriy/revcart-backend:latest \
                            --build-arg JAR_FILE=${jarFile} .
                        """
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
                    docker.image("vanipriy/revcart-backend:latest").push()
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
