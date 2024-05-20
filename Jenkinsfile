pipeline {
    agent any
    stages {
       
         stage('Install Dependencies') {
            steps {
                catchError {
                    bat 'npm install'
                }
            }
        }
        
        stage('Install express') {
            steps {
                catchError {
                    bat 'npm install express'
                }
            }
        }
        
        stage('Install dotenv') {
            steps {
                catchError {
                    bat 'npm install dotenv'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                catchError {
                    bat 'node index.js'
                }
            }
        }
    }
    
    post {
        failure {
            mail to: 'swapnilbidwai@sdlccorp.com',
                 subject: 'Pipeline Failed',
                 body: 'The Jenkins pipeline failed. Please investigate.'
        }
    }
}
