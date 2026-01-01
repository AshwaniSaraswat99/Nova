from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import User

class Register(APIView):
    def post(self, request):
        data = request.data
        user = User.objects.create(
            username=data['username'],
            email=data['email'],
            password=make_password(data['password']),
            role=data.get('role', 'user')
        )
        return Response({"msg": "Registered!"}, status=status.HTTP_201_CREATED)
