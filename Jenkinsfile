pipeline {
    agent any

    environment {
        IMAGE_NAME = 'revcart-backend'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master', credentialsId: 'github-credentials',
                    url: 'https://github.com/Vanipriy/P1-RevCart.git'
            }
        }

        stage('Build Backend JAR') {
            tools {
                maven 'Maven-3.9'
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
                    bat "docker build -t %IMAGE_NAME%:latest ."
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
