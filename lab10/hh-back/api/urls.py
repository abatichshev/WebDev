from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('vacancies/', views.VacancyListCreate.as_view()),
    path('vacancies/<int:pk>/', views.VacancyRetrieveUpdateDestroy.as_view()),
]
