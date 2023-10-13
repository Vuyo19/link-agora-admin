from django.urls import path
from . import views

urlpatterns = [
    # ... other URL patterns
    path('api/event-requests/', views.receive_event_requests, name='receive_event_requests'), # url to receive the event requests. 
    path('api/event-requests-stat/', views.receive_event_requests_stat, name='receive_event_requests_stat'), # url to receive event requests stat.
    path('api/event-request-detail/', views.receive_event_request_detail, name='receive_event_request_detail'), # url to receive full details of the event.
    path('api/event-request-reply/', views.event_request_reply, name='receive_event_request_response'),   # url to receive the event response. 
    path('api/event-request-filter/', views.event_request_filter, name='receive_event_request_filter') # url to receive the event request filter.  
]