pipeline {

    agent any

    stages {

        stage('Checkout Source Code') {
            steps {
                echo 'Source code has been checked out.'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Code Validation') {
            steps {
                bat 'if not exist package.json exit /b 1'
                bat 'if not exist app.js exit /b 1'
                bat 'if not exist server.js exit /b 1'
                bat 'if not exist app.test.js exit /b 1'

                echo 'Required project files are present.'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'start /B node server.js'
                echo 'Application deployed successfully.'
                echo 'Application available at http://localhost:3000'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}