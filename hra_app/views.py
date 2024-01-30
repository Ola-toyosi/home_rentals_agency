from .serializers import PropertySerializer
import json

from rest_framework import generics
# For Authentication
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Property, CustomUser, Lister, SuperAdmin, EndUser
from .pagination import CustomPagination
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from .serializers import PropertySerializer


# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

def lister_home(request):
    print(request)
    lister_obj = Lister.objects.get(admin=request.user.id)
    print(lister_obj)
    return lister_obj

def user_home(request):
    user_obj = EndUser.objects.get(admin=request.user.id)
    print(user_obj)



@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/token/',
        'api/register/',
        'api/token/refresh/',
        'api/test/',
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'repsonse': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        try:
            body = request.body.decode('utf-8')
            data = json.load(body)
            if 'text' not in data:
                return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
            text = data.get('text')
            data = f'Congratualtions your API just responded to POST request with text: {text}'
            return Response({'response': data}, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
    return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)


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
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = PropertySerializer

    queryset = Property.objects.all().order_by('-id')

    pagination_class = CustomPagination
