from django.urls import path
from .import views

urlpatterns = [
    path('universities/',views.university_list),
    path('universities/<int:id>/',views.university_details),
    path('universities/<int:id>/internships',views.university_list),
    path('internships/',views.internship_list),
    path('internships/<int:id>/',views.internship_details),
    path('internships/top_ten/',views.top_internships),


]