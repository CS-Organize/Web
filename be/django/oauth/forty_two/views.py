import dotenv
import os
from django.shortcuts import redirect
from django.http import HttpResponse
import requests
import json

dotenv.load_dotenv()

def login(request):
    client_id = os.getenv('FORTY_TWO_CLIENT_ID')
    redirect_uri = os.getenv('FORTY_TWO_REDIRECT_URI')
    print(f'https://api.intra.42.fr/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code')
    return redirect(f'https://api.intra.42.fr/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code')

def callback(request):
    code = request.GET.get('code')
    client_id = os.getenv('FORTY_TWO_CLIENT_ID')
    client_secret = os.getenv('FORTY_TWO_CLIENT_SECRET')
    redirect_uri = os.getenv('FORTY_TWO_REDIRECT_URI')

    data = {
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'client_secret': client_secret,
        'code': code,
        'redirect_uri': redirect_uri
    }

    response = requests.post('https://api.intra.42.fr/oauth/token', data=data)
    response_data = response.json()
    access_token = response_data['access_token']
    # Make API requests using the access token
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    # Example API request
    response = requests.get('https://api.intra.42.fr/v2/me', headers=headers)
    user_data = response.json()
    with open('res.json', 'w') as file:
        json.dump(user_data, file)
    return HttpResponse(user_data)
