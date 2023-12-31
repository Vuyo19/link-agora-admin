from django.urls import path
from . import views

urlpatterns = [
    # ... other URL patterns
    path('api/send-event-requests/', views.receive_event_requests, name='receive_event_requests'), # url to receive the event requests. 
    path('api/send-event-requests-stat/', views.receive_event_requests_stat, name='receive_event_requests_stat'), # url to receive event requests stat.
    path('api/send-event-request-detail/', views.receive_event_request_detail, name='receive_event_request_detail'), # url to receive full details of the event.
    path('api/event-request-response/', views.event_request_response, name='receive_event_request_response'),   # url to receive the event response. 
    path('api/event-request-filter/', views.event_request_filter, name='receive_event_request_filter') # url to receive the event request filter.  
]