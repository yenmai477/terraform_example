# IAM Access and Secret Key for your IAM user
aws_access_key = "AKIATJC43LDL36UWRGYF"

aws_secret_key = "Y/9d9qouA0/vTsbpFzOF1pS5JPqfL4aDcjoHP4VH"

# Name of the key pair in AWS, MUST be in same region as EC2 instance
# Check README for AWS CLI commands to create a key pair
key_name = "is402"

# Local path to pem file for key pair. 
# Windows paths need to use double-backslash: Ex. C:\\Users\\Ned\\Pluralsight.pem
private_key_path = "C:\\Users\\yenma\\is402.pem" 


# Prefix value to be used for S3 bucket. You can leave this value as-is
bucket_name_prefix = "is402"

# Environment tag for all resources being created. You can leave this value as-is.
environment_tag = "prod"

# Made up billing code to be added as a tag to resources. You can leave this value as-is.
billing_code_tag = "ACCT8675309"
