from django.db import models
from django.contrib.auth import get_user_model
from users.models import CustomUser 

# Create your models here. 

# Creating the status for the request.  

# Decline , admin declined the request, #FAA9A9
# Approve, admin approved the request, #EBFAE4
# Under Review, admin is reviewing the request, #FFD700

class Status(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    color = models.CharField(max_length=20)

    def __str__(self):
        return self.name  
    
# Creating the status for the event track.  

# 0% ("Pending"): #FFC107 (Amber)
#25% ("In Progress"): #2196F3 (Blue)
# 50% ("Halfway"): #4CAF50 (Green)
# 75% ("Almost Complete"): #9C27B0 (Orange)
# 100% ("Completed"): #8BC34A (Lime Green)

class EventTrack(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    color = models.CharField(max_length=20)
    approval_progress = models.PositiveIntegerField(default=0, help_text="Percentage progress of event approval")

    def __str__(self): 
        return self.name    
    

# Creating the speakers for the event 
class Speaker(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='speakers/')

    def __str__(self):
        return f"{self.name} {self.surname}"  
    

# creating the class for the actual event 
class Event(models.Model): 

    event_id_comm = models.CharField(max_length=20)
    title = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    poster = models.ImageField(upload_to='event_posters/')
    description = models.TextField()
    venue = models.CharField(max_length=255)
    capacity = models.PositiveIntegerField()
    organizer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='organized_events')

    # Address fields
    address1 = models.CharField(max_length=255)
    address2 = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20) 

    # Relationships
    eventtrack_id = models.ForeignKey(EventTrack, on_delete=models.CASCADE)
    status_id = models.ForeignKey(Status, on_delete=models.CASCADE) 

    def __str__(self):
        return self.title  
    
class EventLog(models.Model):  
    
    date = models.DateField()
    time = models.TimeField() 

    STATUS_CHOICES = (
        ('has approved', 'Has Approved'),
        ('has declined', 'Has Declined'),
        ('is reviewing', 'Is Reviewing')
    )  

    # Add a foreign key relationship to the Event model
    event = models.ForeignKey(Event, on_delete=models.CASCADE) 

    admin = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='has declined')
    
    def __str__(self):
        return f"{self.admin.first_name} {self.admin.last_name} {self.status} {self.event.title}"


# creating the class for linking the speakers and the actual event. 
class EventSpeaker(models.Model): 

    event_id = models.OneToOneField(Event, on_delete=models.CASCADE)
    speaker_id = models.OneToOneField(Speaker, on_delete=models.CASCADE) 

    def __str__(self):
        return f"{self.speaker_id.name} {self.speaker_id.surname} is attending the {self.event_id.title} event"





    

     




