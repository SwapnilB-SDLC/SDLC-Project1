pipeline {
    agent any
    stages {
       
         stage('Install Dependencies') {
            steps {
                catchError {
                    sh 'npm install'
                }
            }
        }
        
        stage('Install express') {
            steps {
                catchError {
                    sh 'npm install express'
                }
            }
        }
        
        stage('Install dotenv') {
            steps {
                catchError {
                    sh 'npm install dotenv'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                catchError {
                    sh 'node index.js'
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
