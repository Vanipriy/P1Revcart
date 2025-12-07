pipeline {
    agent any

    environment {
        IMAGE_NAME = 'revcart-backend'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', credentialsId: 'github-credentials',
                    url: 'https://github.com/Vanipriy/P1Revcart.git'
            }
        }

        stage('Build Backend JAR') {
            tools {
                maven 'M3'
            }
            steps {
                dir('backend') {
                    bat "mvn clean package -DskipTests"
                }
            }
        }

        withCredentials([usernamePassword(credentialsId: "docker-hub-credentials",
                                  usernameVariable: "DOCKER_USER",
                                  passwordVariable: "DOCKER_PASS")]) {
    bat "\"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe\" login -u %DOCKER_USER% -p %DOCKER_PASS%"
    bat "\"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe\" build -t revcart-backend:latest ."
    bat "\"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe\" push vanipriy/revcart-backend:latest"
}


        stage('Build Docker Image') {
    steps {
        dir('backend') {
            withCredentials([usernamePassword(
                credentialsId: 'docker-hub-credentials',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
            )]) {
                bat "\"${env.DOCKER_PATH}\" login -u %DOCKER_USER% -p %DOCKER_PASS%"
                bat "\"${env.DOCKER_PATH}\" build -t revcart-backend:latest ."
            }
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
