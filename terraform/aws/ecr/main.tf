variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "region" {
  default = "us-east-1"
}

# TODO: 09/13/21 AWS Provider
provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region
}

# TODO: 09/13/21 ECR config
resource "aws_ecr_repository" "myapp" {
  name = "myapp"
}


output "ecr_repository_url" {
  value = replace(aws_ecr_repository.myapp.repository_url, "https://", "")
}
