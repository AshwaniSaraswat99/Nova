from django.urls import path
from .views import TaskAPI, TaskDetail

urlpatterns = [
 path('', TaskAPI.as_view()),
 path('<int:id>/', TaskDetail.as_view()),
]
