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
                        publishers: [
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
            script {
                def blueOceanURL = ${env.JENKINS_URL}blue/organizations/jenkins/${env.JOB_NAME}/detail/${env.JOB_NAME}/${env.BUILD_NUMBER}/pipeline
                def message = "Pipeline executed successfully!\n#${blueOceanURL}"
                sendMessageToTelegram(message)
            }
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}

def sendMessageToTelegram(message) {
    def botToken = env.TELEGRAM_BOT_TOKEN
    def chatId = env.TELEGRAM_CHAT_ID 
    sh """
        curl -s -X POST \
             -H 'Content-Type: application/json' \
             -d '{"chat_id":"${chatId}","text":"${message}"}' \
             https://api.telegram.org/bot${botToken}/sendMessage
    """
}