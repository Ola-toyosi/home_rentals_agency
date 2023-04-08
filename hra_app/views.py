from django.shortcuts import render
from .serializers import PropertySerializer
from .models import Property
from .pagination import CustomPagination
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status, viewsets

# Create your views here.

# def PropertyView(APIView):
    # parser_classes = (MultiParser, FormParser)

    # def get(self, request, *args, **kwargs):
    #     properties = Property.objects.all()
    #     serializer = PropertySerializer(properties, many=True)
    #     return Response(serializer.data)

    # def post(self,request, *args, **kwargs):
    #     properties_serializer = PropertySerializer(data=request.data)
    #     if properties_serializer.is_valid():
    #         properties_serializer.save()
    #         return Response(properties_serializer.data, status=status.HTTP_201_CREATED)
        
    #     else:
    #         print('error', properties_serializer.errors)
    #         return Response(properties_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class PropertyView(viewsets.ModelViewSet):

    serializer_class = PropertySerializer

    queryset = Property.objects.all().order_by('-id')

    pagination_class = CustomPagination