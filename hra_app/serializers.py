from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import CustomUser
from .models import Property

MIN_LENGTH = 8


# Authentication Serializers
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['user_type'] = user.user_type
        token['phone_number'] = user.phone_number
        # token['admin'] = user.admin
        # print(user.admin)
        return token


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=MIN_LENGTH)
    phone_number = serializers.CharField(min_length=MIN_LENGTH)
    user_type = serializers.ChoiceField(choices=CustomUser.user_type_data)

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        min_length=MIN_LENGTH,
        error_messages={
            "min_length": f"Password must be longer than {MIN_LENGTH} characters."
        },
        style={'input_type': 'password'}
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        min_length=MIN_LENGTH,
        error_messages={
            "min_length": f"Password must be longer than {MIN_LENGTH} characters."
        },
        style={'input_type': 'password'}
    )

    class Meta:
        model = CustomUser
        fields = ("first_name", "last_name", "email", "username", "password", "password2", "phone_number", "user_type")

    def validate(self, attrs):
        email = attrs["email"]
        username = attrs['username']

        if CustomUser.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {"email": "email already exists"})
        if CustomUser.objects.filter(username=username).exists():
            raise serializers.ValidationError(
                {"username": "username already exists"})
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match"}
            )

        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            phone_number=validated_data["phone_number"],
            user_type=validated_data["user_type"],
        )
        user.set_password(validated_data['password'])
        user.save()
        # if user.user_type == CustomUser.SUPERADMIN:
        #     SuperAdmin.objects.create(admin=user)
        # if user.user_type == CustomUser.LISTER:
        #     print(user)
        #     Lister.objects.create(admin=user)
        # if user.user_type == CustomUser.USER:
        #     EndUser.objects.create(admin=user)

        return user


# Property Serializer
class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'

    # def create(self, validated_data):
    #     lister = Property.objects.create(
    #
    #         name=validated_data["name"],
    #         address=validated_data["address"],
    #         unit_number=validated_data["unit_number"],
    #         city=validated_data["city"],
    #         state=validated_data["state"],
    #         type=validated_data["room_type"],
    #         price=validated_data["price"],
    #         description=validated_data["description"],
    #         image=validated_data["image"],
    #         lister_id=validated_data["lister_id"],
    #     )
    #     print(lister.lister_id)
    #
    #     return lister
