
terraform {
  backend "s3" {
    bucket = "is402-74770"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
} 
