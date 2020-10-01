# LinkedIn Sync for registraion forms
OAuth signin with LinkedIn and fetch `firstName`, `lastName` for a user and populate your registraion form. This could be extended later to fetch more fields. 

# Setup 
Create a LinkedIn OAuth app using [LinkedIn Apps](https://www.linkedin.com/developers/apps/new). Place this module in `modules/custom/` in your Drupal app. 

Fill in the settings for the following configurations: 
- client_secret
- client_id 
- redirect_uri 

Your LinkedIn autofill button shows up on your registration page. 
