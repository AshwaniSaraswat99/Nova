from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSer

class TaskAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role == 'admin':
            tasks = Task.objects.all()
        else:
            tasks = Task.objects.filter(user=request.user)
        ser = TaskSer(tasks, many=True)
        return Response(ser.data)

    def post(self, request):
        ser = TaskSer(data=request.data)
        if ser.is_valid():
            ser.save(user=request.user)
            return Response({"msg": "Task added!"}, status=201)
        return Response(ser.errors, status=400)

class TaskDetail(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id):
        t = Task.objects.get(id=id)
        if request.user.role != 'admin' and t.user != request.user:
            return Response({"err": "Not allowed"}, status=403)
        t.delete()
        return Response({"msg": "Deleted"})
