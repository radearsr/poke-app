pipeline{
    agent any
    tools {
        nodejs "NodeJS 18.18.0"
    }
    stages{
        stage("Build"){
            steps{
                echo "========BUILDING========"
                sh "npm -v"
                sh "node -v"
                sh "npm install"
                sh "npm run build"
                echo "BUILD SUCCESS LISTING FILES"
                sh "ls -al"
                echo "ARCHIVE FOLDER DIST"
                sh "tar -cf dist.tar dist"
                echo "LISTING RESULT ARCHIVE"
                sh "ls -al"
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}