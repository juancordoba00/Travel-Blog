pipeline {

    agent any

    /* environment {
  		PASS = credentials('registry-pass')
    } */
    stages {

        stage('INITIALIZE') {
            steps {
                echo "Inicializando..."
            }
        }
        stage('GET_CODE') {
            steps {
				echo "[EXEC] - Obtener codigo fuente desde repositorio Git"
				script{	
					checkout scm
				}
				
            }
        }
        stage('Build') {
            steps {
                echo "Building..."
                script{
                    sh "npm install"
					sh "gatsby build"
                }
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
                script{
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "049606576112", accessKeyVariable: 'AKIAQXDGII7YLGDRSGNZ', secretKeyVariable: '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']]) {
						sh 'aws s3 cp ./build s3://bucket-images-1/ --recursive'
					}
                }
            }
        }
    }
}
