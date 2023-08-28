from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views

router = routers.DefaultRouter()

router.register(r'properties', views.PropertyView, 'property')
urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refesh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('', include(router.urls))
]
