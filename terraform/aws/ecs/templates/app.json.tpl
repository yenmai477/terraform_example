[
  {
    "essential": true,
    "memory": 256,
    "name": "myapp",
    "cpu": 256,
    "image": "${REPOSITORY_URL}:1",
    "command": ["nginx", "-g", "daemon off;"],
    "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
    ]
  }
]
