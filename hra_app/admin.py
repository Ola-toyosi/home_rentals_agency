from django.contrib import admin

from .models import Property
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Lister, SuperAdmin, EndUser


class UserModel(UserAdmin):
    pass


# Register your models here.

admin.site.register(CustomUser, UserModel)

admin.site.register(SuperAdmin)
admin.site.register(Lister)
admin.site.register(EndUser)

admin.site.register(Property)
