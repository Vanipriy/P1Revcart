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
                    bat "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Push Docker Image to AWS ECR') {
    steps {
        withCredentials([
            string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY_ID'),
            string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
        ]) {
            bat """
            aws configure set aws_access_key_id %AWS_ACCESS_KEY_ID%
            aws configure set aws_secret_access_key %AWS_SECRET_ACCESS_KEY%
            aws configure set default.region ap-south-1

            aws ecr get-login-password --region ap-south-1 ^
            | docker login --username AWS --password-stdin 744640651616.dkr.ecr.ap-south-1.amazonaws.com

            docker tag ${IMAGE_NAME}:latest 744640651616.dkr.ecr.ap-south-1.amazonaws.com/${IMAGE_NAME}:latest
            docker push 744640651616.dkr.ecr.ap-south-1.amazonaws.com/${IMAGE_NAME}:latest
            """
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
