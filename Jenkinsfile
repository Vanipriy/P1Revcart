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

        stage('Build Docker Image') {
    steps {
        dir('backend') {
            bat "\"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe\" build -t revcart-backend:latest ."
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
