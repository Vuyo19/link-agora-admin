from django.shortcuts import render 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from event_request.models import Event, EventTrack, Status
from django.db.models import Count
from users.models import CustomUser
from datetime import datetime

# Create your views here. 
# views for the managed events.  
@csrf_exempt 
def managed_events(request): 

    # Calling the function to return all the events excluding the events that are still pending. 
    if request.method == 'POST':  
 
        # Loading all the events 
        events = Event.objects.all()  
        serialized_events = []   

        # Loading the events but excluding the requested events that are still pending. 
        events = Event.objects.exclude(eventtrack_id__name='Still pending')

        for event in events:
            serialized_events.append({
                'event_id': event.id,
                'event_id_comm': event.event_id_comm,
                'title': event.title,
                'date': str(event.date.strftime('%Y-%m-%d')),
                'time': str(event.time.strftime('%H:%M:%S')),
                'description': event.description,
                'venue': event.venue,
                'capacity': event.capacity,
                'organizer_email': event.organizer.email,
                'organizer_name': event.organizer.first_name + " " + event.organizer.last_name,
                'address1': event.address1,
                'address2': event.address2,
                'city': event.city,
                'province': event.province,
                'postal_code': event.postal_code,
                'eventtrack_label': event.eventtrack_id.name,
                'eventtrack_color': event.eventtrack_id.color,
                'status_label': event.status_id.name,
                'approval_progress': event.eventtrack_id.approval_progress
            })

        return JsonResponse({'events': serialized_events, 'message': 'Results have been a success'})
    else: 
        return JsonResponse({'message': 'failed'}, status=400)
    
# Creating a managed events filter. 
@csrf_exempt
def managed_events_filter(request): 

    if request.method == 'POST': 

        data = json.loads(request.body)  

        # Checking which button was clicked and what the value is. 
        filter_value = data.get('event_manage_filter') # getting the filter value.  

        serialized_events = [] 
        events = None  

        if filter_value == 'underReview': 
            events = Event.objects.filter(status_id__name="Under Review")
        elif filter_value == 'declined': 
            events = Event.objects.filter(status_id__name="Declined")
        elif filter_value == 'approved': 
            events = Event.objects.filter(status_id__name="Approved")
        else: 
            events = Event.objects.exclude(eventtrack_id__name='Still pending')

        for event in events:
            serialized_events.append({
                'event_id': event.id,
                'event_id_comm': event.event_id_comm,
                'title': event.title,
                'date': str(event.date.strftime('%Y-%m-%d')),
                'time': str(event.time.strftime('%H:%M:%S')),
                'description': event.description,
                'venue': event.venue,
                'capacity': event.capacity,
                'organizer_email': event.organizer.email,
                'organizer_name': event.organizer.first_name + " " + event.organizer.last_name,
                'address1': event.address1,
                'address2': event.address2,
                'city': event.city,
                'province': event.province,
                'postal_code': event.postal_code,
                'eventtrack_label': event.eventtrack_id.name,
                'eventtrack_color': event.eventtrack_id.color,
                'status_label': event.status_id.name,
                'approval_progress': event.eventtrack_id.approval_progress
            })

        return JsonResponse({'events': serialized_events})
    else: 
        return JsonResponse({'message': 'failed'}, status=400) 





