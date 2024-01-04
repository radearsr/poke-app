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
                                configName: "Server Rabbit 01"
                                transfers: [
                                    [
                                        execCommand: 'tar -xf /home/rabbit/dist.tar',
                                        execTimeout: 120000,
                                        flatten: false,
                                        makeEmptyDirs: false,
                                        noDefaultExcludes: false,
                                        patternSeparator: '[, ]+',
                                        remoteDirectory: '',
                                        removePrefix: '',
                                        sourceFiles: '*.tar'                                       
                                    ]
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