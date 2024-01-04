pipeline{
    agent any
    tools {
        nodejs "NodeJS 18.18.0"
    }
    stages{
        stage("Build"){
            steps{
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
        stage("Deploy"){
            steps{
                script {
                    sshPublisher(
                        failOnError: true,
                        publisher: [
                            sshPublisherDesc(
                                configName: "Server Rabbit 01",
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "*.tar",
                                        execCommand: """
                                            tar -xf /home/rabbit/dist.tar
                                            rm /home/rabbit/dist.tar
                                            mv /home/rabbit/dist /var/www/html/
                                            rm -r /var/www/html/assets
                                            rm  /var/www/html/heart-full.png
                                            rm  /var/www/html/heart.png
                                            rm  /var/www/html/pokeapi-banner.png
                                            rm  /var/www/html/vite.svg
                                            rm  /var/www/html/index.html
                                            mv /var/www/html/dist/** /var/www/html/
                                            rm -r /var/www/html/dist                                            
                                        """
                                    )
                                ]
                            )
                        ]
                    )
                }
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