from django.http import JsonResponse
from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    return JsonResponse([c.to_json() for c in companies], safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancies.all()
        return JsonResponse([v.to_json() for v in vacancies], safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def top_ten_vacancies(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in top_vacancies], safe=False)
