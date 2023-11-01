from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt 
from users.models import CustomUser
import datetime 
from event_request.models import Event, EventTrack, Status, EventLog
import calendar


# Create your views here.
@csrf_exempt
def activity_log_request(request): 

    if request.method == 'POST':  

        # Getting the current date 
        current_date = datetime.date.today() 
        # Calculate the first day of the current month
        first_day_of_month = current_date.replace(day=1) 

        # Determine the last day of the current month based on the number of days
        _, last_day = calendar.monthrange(current_date.year, current_date.month)
        last_day_of_month = datetime.date(current_date.year, current_date.month, last_day) 

        event_logs = EventLog.objects.filter(date__range=(first_day_of_month, last_day_of_month)).order_by('-date', '-time') 

        # Formatting the activity log and sending through to React.  
        serialized_activity = []   
        for event_log in event_logs: 
            serialized_activity.append({
                'date': str(event_log.date),
                'time': str(event_log.time), 
                'status': str(event_log.status), 
                'admin_first_name': event_log.admin.first_name,
                'admin_surname': event_log.admin.surname,
                'event_title': event_log.event.title, 
                'message': str(event_log)
            }) 
        
        return JsonResponse({'message': 'success', 'activity_log': serialized_activity})
    else: 
        return JsonResponse({'message': 'failed'}, status=400) 
