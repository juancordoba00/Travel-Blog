pipeline {

    agent any

    /* environment {
  		PASS = credentials('registry-pass')
    } */

    stages {

        stage('Build') {
            steps {
                echo "Building..."
            }
            /* post {
                success {
                    archiveArtifacts artifacts: 'java-app/target/*.jar', fingerprint: true
                }
            } */

        }                        
        stage('Test') {
            steps {
                echo "Testing..."
            }
            /* post {
                always {
                    junit 'java-app/target/surefire-reports/*.xml'
                }
	        } */

        }
        stage('Push') {
            steps {
                echo "Pushing..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying..."
            }
        }
    }
}
