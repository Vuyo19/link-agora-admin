from django.shortcuts import render 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from event_request.models import Event, EventTrack, Status
from django.db.models import Count, Q
from users.models import CustomUser
from datetime import datetime


# Create your views here. 
# views for the managed events.  
@csrf_exempt 
def history_events(request): 

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
def history_events_filter(request): 

    if request.method == 'POST': 

        data = json.loads(request.body)  

        # Checking which button was clicked and what the value is. 
        filter_value = data.get('history_event_filter') # getting the filter value.  

        serialized_events = [] 
        events = None  

        if filter_value == 'declined': 
            events = Event.objects.filter(status_id__name="Declined")
        elif filter_value == 'approved': 
            events = Event.objects.filter(status_id__name="Approved")
        else: 
            # Define the conditions you want to exclude
            exclude_condition1 = Q(eventtrack_id__name='In Queue') # Exclude in Queue
            exclude_condition2 = Q(eventtrack_id__name='Under Review') # Exclude Under Review
            exclude_both_conditions = exclude_condition1 | exclude_condition2
            events = Event.objects.exclude(exclude_both_conditions) # Excluding two conditions

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
 

        print(serialized_events) 

        return JsonResponse({'events': serialized_events})
    else: 
        return JsonResponse({'message': 'failed'}, status=400)  
    
# Creating a managed events stat. 
@csrf_exempt 
def history_events_stat(request): 

    if request.method == 'POST':  

        # Getting the number of events that were approved. 
        events = Event.objects.filter(status_id__name="Approved")
        approved_event_count = events.count()

        # Getting the number of events that were declined. 
        events = Event.objects.filter(status_id__name="Declined")
        declined_event_count = events.count()

        # Getting the total events.  
        exclude_condition1 = Q(eventtrack_id__name='In Queue') # Exclude in Queue
        exclude_condition2 = Q(eventtrack_id__name='Under Review') # Exclude Under Review
        exclude_both_conditions = exclude_condition1 | exclude_condition2
        events = Event.objects.exclude(exclude_both_conditions) # Excluding two conditions 
        total_events = events.count() 

        # Getting the total number of organisers that requested for an event. 
        # Define the conditions to exclude 'Under Review' and 'In Queue'
        exclude_conditions = Q(organized_events__eventtrack_id__name='Under Review') | Q(organized_events__eventtrack_id__name='In Queue')

        # Query to count organizers who have made a request for an event
        organizers_count = CustomUser.objects.annotate(
            event_count=Count('organized_events', distinct=True)
        ).exclude(exclude_conditions)

        # Get the total count of organizers
        total_organizers_count = organizers_count.count()

        return JsonResponse({'history_stats': {'total_events': total_events, 'total_organisers': total_organizers_count, 'approved_events': approved_event_count, 'declined_events': declined_event_count}})
    else: 
        return JsonResponse({'message': 'failed'}, status=400) 






