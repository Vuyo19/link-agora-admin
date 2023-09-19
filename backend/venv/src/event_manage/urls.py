from django.urls import path
from . import views 

urlpatterns = [ 
    # manage events URL patterns. 
    path('api/managed-events/', views.managed_events, name='receive_managed_events'), 
    path('api/managed-events-filter/', views.managed_events_filter, name='receive_managed_events_filter'), 
    path('api/managed-events-stat/', views.managed_events_stat, name='receive_managed_events_stat')
]
