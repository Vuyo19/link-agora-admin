from django.urls import path
from . import views 

urlpatterns = [ 
    # manage events URL patterns. 
    path('api/history-events/', views.history_events, name='receive_history_events'), 
    path('api/history-events-filter/', views.history_events_filter, name='receive_history_events_filter'), 
    path('api/history-stats/', views.history_events_stat, name='receive_history_events_stat')
]

