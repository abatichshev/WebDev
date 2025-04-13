from django.shortcuts import render
from .models import University, Internship

# Create your views here.
def university_list(request):
    universities = University.objects.all()
    return JsonResponse([u.to_json() for u in universities], safe = False)


def university_details(request, id):
    try:
        university = University.objects.get(id=id)
        return JsonResponse(university.to_json())
    except University.DoesNotExist:
        return JsonResponse({'error': 'University not found'}, status=404)


def university_internships(request, id):
    try:
        university = University.objects.get(id=id)
        return JsonResponse([i.to_json() for i in internships], safe = False)
    except University.DoesNotExist:
        return JsonResponse({'error': 'University not found'}, status=404)



def internship_list(request):
    internships = Internship.objects.all()
    return JsonResponse([i.to_json() for i in internships], safe = False)

def internship_details(request,id):
    try:
        interbship = Interbship.objects.get(id=id)
        return JsonResponse(internships.to_json())
    except Intership.DoesNotExist:
        return JsonResponse({'error': 'Internships not found'}, status=404)
    

def top_interships(request):
    top = Internship.object.order_by('-stipend') [:10]
    return JsonResponse([i.to_json() for i in top], safe = False)