from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .manager import CustomUserManager


# Create your models here.
class CustomUser(AbstractUser, PermissionsMixin):
    SUPERADMIN = 1
    LISTER = 2
    USER = 3

    user_type_data = ((SUPERADMIN, "SuperAdmin"),
                      (LISTER, "Lister"), (USER, "User"),)

    user_type = models.CharField(choices=user_type_data, max_length=10)

    email = models.EmailField(_("email address"), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone_number = models.CharField(max_length=15)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class SuperAdmin(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = models.Manager()


class Lister(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = models.Manager()


class EndUser(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = models.Manager()


# Creating Django Signals
@receiver(post_save, sender=CustomUser)
# now creating a function which will automatically insert data into HOD, Staff or Student
def create_user_profile(sender, instance, created, **kwargs):
    #         if created is true(Means Data Inserted)
    if created:
        #         check the user type and insert the data into the respective tables
        if instance.user_type == 1:
            SuperAdmin.objects.create(admin=instance)
        if instance.user_type == 2:
            Lister.objects.create(admin=instance)
        if instance.user_type == 3:
            EndUser.objects.create(admin=instance)


@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):
    if instance.user_type == 1:
        instance.superadmin.save()
    if instance.user_type == 2:
        instance.lister.save()
    if instance.user_type == 3:
        instance.enduser.save()


class Property(models.Model):
    STUDIO = 'ST'
    PRIVATE_ROOM = 'PR'
    LOFT = 'LF'
    HIGH_RISE = 'HR'
    DUPLEX = 'DL'

    PROPERTY_TYPE_CHOICES = [
        (STUDIO, 'Studio'),
        (PRIVATE_ROOM, 'Private Room'),
        (LOFT, 'Loft'),
        (HIGH_RISE, 'High Rise'),
        (DUPLEX, 'Duplex')
    ]

    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    unit_number = models.PositiveIntegerField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    type = models.CharField(max_length=255, choices=PROPERTY_TYPE_CHOICES, default=PRIVATE_ROOM)
    price = models.PositiveIntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='post_images')
    lister_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
