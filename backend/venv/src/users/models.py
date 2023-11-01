
# Create your models here.
from django.db import models

from enum import unique
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager 
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields) 
    
class CustomUser(AbstractUser): 

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    
    RACE_CHOICES = (
        ('C', 'Caucasian'),
        ('A', 'Asian'),
        ('B', 'Black'),
        ('H', 'Hispanic'),
        ('O', 'Other'),
    )
    
    REASONS_CHOICES = (
        ('CAREER', 'Career Opportunities'),
        ('NETWORK', 'Networking'),
        ('SKILLS', 'Skill Development'),
        ('PASSION', 'Pursuing Passion'),
        ('OTHER', 'Other'),
    )

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50, null=True)
    surname = models.CharField(max_length=50, null=True)
    title = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    age = models.PositiveIntegerField()
    race = models.CharField(max_length=1, choices=RACE_CHOICES)
    mobile = models.CharField(max_length=20)
    branch_province = models.CharField(max_length=50)
    branch_region = models.CharField(max_length=50)
    id_photo = models.ImageField(upload_to='user_photos/')
    cv = models.FileField(upload_to='user_cvs/')
    upload = models.FileField(upload_to='user_uploads/')
    reasons_for_joining = models.ManyToManyField('Reason', choices=REASONS_CHOICES)
    job_title = models.CharField(max_length=100)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserManager()
    
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'surname', 'title', 'gender', 'date_of_birth', 'age', 'race', 'mobile', 'branch_province', 'branch_region', 'job_title']

    def __str__(self):
        return self.email
    
# Reasons for joining model
class Reason(models.Model):
    reason = models.CharField(max_length=20, choices=CustomUser.REASONS_CHOICES)

    def __str__(self):
        return self.reason