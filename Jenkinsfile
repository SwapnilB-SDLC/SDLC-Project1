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
                    
                    sh 'pm2 stop ecosystem.config.js && pm2 start ecosystem.config.js && pm2 save'
    
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
