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

#Bucket variables
variable "aws_bucket_prefix" {
  type    = string
  default = "is402"
}


 // TODO: 09/18/21 Resource random to create unique S3 name
 resource "random_integer" "rand" {
  min = 10000
  max = 99999
}

locals {
  bucket_name = "${var.aws_bucket_prefix}-${random_integer.rand.result}"
}



 //TODO: 09/18/21 Add S3 bucket for backend config
 resource "aws_s3_bucket" "state_bucket" {
  bucket        = local.bucket_name
  acl           = "private"
  force_destroy = true

  versioning {
    enabled = true
  }

}


output "s3_bucket" {
  value = aws_s3_bucket.state_bucket.bucket
}
