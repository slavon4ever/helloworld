# Webapp demo

## Usage

- From Docker hub

    $ docker run -p 8080:8080 -d slavon4ever/helloworld

- From local image

    $ git clone https://github.com/slavon4ever/helloworld.git && cd helloworld

    $ docker build -t helloworld . && docker run -p 8080:8080 -d helloworld

Hello-world webapp is accessible via: `http://<DockerHostIP>:8080`

Webapp metrics: `http://<DockerHostIP>:8080/metrics`
