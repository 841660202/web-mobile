pipeline {
    agent any
    stages {
        stage('版本查看') {
            steps {
                sh 'docker -v'
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}
