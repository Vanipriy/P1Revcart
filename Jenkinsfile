pipeline {
    agent any

    tools {
        maven 'Maven'
    }

    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Vanipriy/P1Revcart.git',
                    credentialsId: 'github-credentials'
            }
        }

        stage('Build Backend JAR') {
            steps {
                dir('backend') {
                    bat "mvn clean package -DskipTests"
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                dir('backend') {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials',
                                                      usernameVariable: 'DOCKER_USER',
                                                      passwordVariable: 'DOCKER_PASS')]) {

                        bat "\"${env.DOCKER_PATH}\" login -u %DOCKER_USER% -p %DOCKER_PASS%"
                        bat "\"${env.DOCKER_PATH}\" build -t %DOCKER_USER%/revcart-backend:latest ."
                        bat "\"${env.DOCKER_PATH}\" push %DOCKER_USER%/revcart-backend:latest"
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
