
from django.urls import path
from . import views  

urlpatterns = [ 
    path('api/log/', views.activity_log_request, name="activity_log_request") # Making request for the activity log.
]