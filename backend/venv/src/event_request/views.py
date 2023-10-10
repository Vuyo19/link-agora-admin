from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Event, EventTrack, Status
from django.db.models import Count
from users.models import CustomUser
from datetime import datetime


# Create your views here.
@csrf_exempt # WARNING! REMOVE WHEN GOING ON PRODUCTION.
def receive_event_requests(request): 
    if request.method == 'POST':  
        try:
            # Loading all the events 
            events = Event.objects.all()  
            serialized_events = [] 
            serialized_events_overview = [] # Creating the overview information of the event request. 
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
                # Returning the events as json. 
            return JsonResponse({'events': serialized_events, 'message': 'Results have been a success'}) 
        except Exception as e: 
            return JsonResponse({'message': 'Failed to find results'})
    else: 
        print('Data Not Received') 
        return JsonResponse({'message': 'failed'}, status=400) 
    

@csrf_exempt # WARNING! REMOVE WHEN GOING ON PRODUCTION. 
def receive_event_requests_stat(request): 
    if request.method == 'POST':   

        # Returning the event request overview.  
        # Query to count the number of event organizers who made event requests
        organiser_count = CustomUser.objects.filter(organized_events__isnull=False).annotate(
            event_request_count=Count('organized_events')
        ).filter(event_request_count__gt=0).count() 

        # Query the number of events with EventTrack name set to "Still pending"
        pending_events_count = Event.objects.filter(eventtrack_id__name="Still pending").count()

        return JsonResponse({'event_organisers_num': organiser_count, 'events_pending_num': pending_events_count, 'total_events_num': ''})

    else: 
        return JsonResponse({'message': 'failed'}, status=400) 
 
@csrf_exempt # WARNING! REMOVE WHEN GOING ON PRODUCTION. 
def receive_event_request_detail(request):  

    # List of month names. 
    months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    if request.method == 'POST':   
       
       # Capture the Id of the event request to load the detail 
        data = json.loads(request.body) 

        event_id = data.get('event_id') 
        print(event_id)

        event_result = Event.objects.get(id=event_id)   

        # Checking to see if am or pm must be assigned
        ampm = "am"
        if event_result.time.hour >= 12: 
            ampm = "pm" 
                
        serialized_event = {}
        serialized_event = {
            'event_id': event_result.id,
            'event_id_comm': event_result.event_id_comm,
            'title': event_result.title,
            'date': str(event_result.date.strftime('%Y-%m-%d')),
            'time': str(event_result.time.strftime('%H:%M:%S')),
            'date_format': f"{event_result.date.day:02d} {months[event_result.date.month - 1]}, {event_result.date.year} - {event_result.time.hour:02d}:{event_result.time.minute:02d} {ampm}",
            'description': event_result.description,
            'venue': event_result.venue,
            'capacity': event_result.capacity,
            'organizer_email': event_result.organizer.email,
            'organizer_name': event_result.organizer.first_name + " " + event_result.organizer.last_name,
            'address1': event_result.address1,
            'address2': event_result.address2,
            'city': event_result.city,
            'province': event_result.province,
            'postal_code': event_result.postal_code,
            'eventtrack_label': event_result.eventtrack_id.name,
            'eventtrack_color': event_result.eventtrack_id.color,
            'status_label': event_result.status_id.name,
            'approval_progress': event_result.eventtrack_id.approval_progress

        }

        return JsonResponse({'event_detail': serialized_event}) 
    else: 
        return JsonResponse({'message': 'failed'}, status=400) 

# Responding to the event request. Either accept, decline or put under review. 
@csrf_exempt # WARNING! REMOVE WHEN GOING ON PRODUCTION.   
def event_request_reply(request): 

    if request.method == 'POST':   

        # Capture the Id of the event request and the response made for the event. 
        data = json.loads(request.body)   

        event_id = data.get('event_id') # Getting the id of the event
        event_reply = data.get('event_reply') # Getting the response of the event.    

        event_instance = Event.objects.get(id=event_id) 
        response = ""

        # Inspecting the type of response. 

        # If the event was placed under revieew
        if event_reply == "underReview":  

            mod_eventtrack = EventTrack.objects.get(id=2) # Getting under Review row
            mod_status = Status.objects.get(id=1) # Getting the Under Review row.  

            # Changing the details of the event. 
            event_instance.eventtrack_id = mod_eventtrack
            event_instance.status_id = mod_status 
            event_instance.save()  
            response = "Requested event has been placed under review!"

        # If the event was approved
        elif event_reply == "approved":  

            mod_eventtrack = EventTrack.objects.get(id=3) # Review complete
            mod_status = Status.objects.get(id=2) # Changing the status to approved

            # Changing the details of the event. 
            event_instance.eventtrack_id = mod_eventtrack
            event_instance.status_id = mod_status 
            event_instance.save()  
            response = "Requested event has been approved!"

        # If the event was declined. 
        elif event_reply == "declined":  

            mod_eventtrack = EventTrack.objects.get(id=3) # Review complete
            mod_status = Status.objects.get(id=3) # Changing the status to declined.   

            # Changing the details of the event. 
            event_instance.eventtrack_id = mod_eventtrack
            event_instance.status_id = mod_status 
            event_instance.save()  
            response = "Requested event has been declined!"


        return JsonResponse({'message': response}) # Sending the response. 
    else: 
        return JsonResponse({'message': 'failed'}, status=400) 
    
@csrf_exempt # WARNING! REMOVE WHEN GOING ON PRODUCTION.
# Filtering the event request. 
def event_request_filter(request): 

    if request.method == 'POST':  

        data = json.loads(request.body)  

        # Checking which button was clicked and what the value is. 
        filter_value = data.get('event_response_filter') # getting the filter value.  

        serialized_events = [] 
        events = None

        if filter_value == "inQueue": 
            events = Event.objects.filter(eventtrack_id__name="In Queue")
        elif filter_value == "underReview":  
            events = Event.objects.filter(eventtrack_id__name="Under Review")
        elif filter_value == "complete": 
            events = Event.objects.filter(eventtrack_id__name="Complete")  
        else: 
            events = Event.objects.all()

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
        

        # Capturing the filter label of the event requests and then returning the events based on the filtered content. 
        return JsonResponse({'message': 'Content changed', 'events': serialized_events})
    else: 
        return JsonResponse({'message': 'failed'}, status=400)


