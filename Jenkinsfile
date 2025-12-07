pipeline {
    agent any

    tools {
        maven 'Maven'   // Make sure Maven tool is configured in Jenkins
    }

    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe"
        IMAGE_NAME = "revcart-backend"
        CONTAINER_NAME = "revcart-backend-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master',
                credentialsId: 'github-credentials',
                url: 'https://github.com/Vanipriy/P1Revcart.git'
            }
        }

        stage('Build JAR') {
            steps {
                dir('backend') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Docker Build Image') {
            steps {
                dir('backend') {
                    bat "\"${DOCKER_PATH}\" build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Stop Existing Container if Any') {
            steps {
                script {
                    bat "\"${DOCKER_PATH}\" ps -q --filter \"name=${CONTAINER_NAME}\" | findstr . && \"${DOCKER_PATH}\" stop ${CONTAINER_NAME} || echo No existing container"
                    bat "\"${DOCKER_PATH}\" rm ${CONTAINER_NAME} || echo No container to remove"
                }
            }
        }

        stage('Run Container') {
            steps {
                bat "\"${DOCKER_PATH}\" run -d --name ${CONTAINER_NAME} -p 8080:8080 ${IMAGE_NAME}:latest"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
