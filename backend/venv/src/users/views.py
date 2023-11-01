from django.shortcuts import render 
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from users.models import CustomUser
import json
from django.contrib.auth import authenticate, login


# Create your views here. 

@csrf_exempt
def login_request(request): 

    if request.method == "POST": 

        data = json.loads(request.body)  

        # Grabbing the email and password details. 
        admin_email = data.get('admin_response_email')
        admin_password = data.get('admin_response_password') 

        # Authenticating the user
        user = authenticate(request, username=admin_email, password=admin_password) 

        if user is not None: 
            if user.is_active:
                login(request, user)
                print("User exists")
                return JsonResponse({'message': 'Login successful'})
            else:
                return JsonResponse({'message': 'Account is not active'}, status=200) 
        else: 
            print("User does not exist")
            return JsonResponse({'message': 'Login failed'}, status=400)  
        
    else: 
        print('Data Not Received') 
        return JsonResponse({'message': 'failed'}, status=400) 
 