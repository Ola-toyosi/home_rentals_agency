from django.db import models

# Create your models here.

class Property(models.Model) :
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
    state = models.CharField(max_length= 255)
    type = models.CharField(max_length=255, choices=PROPERTY_TYPE_CHOICES, default=PRIVATE_ROOM)
    price = models.PositiveIntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='post_images')

    def __str__(self):
        return self.name



