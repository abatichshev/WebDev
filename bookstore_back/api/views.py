from django.shortcuts import render
from django.http import JsonResponse
from .models import Book

# Create your views here.

def get_books(request):
    books = Book.objects.all()
    return JsonResponse([book.to_json() for book in books],safe = False)


def get_book(request,id):
    try:
        book = Book.objects.get(id=id)
        return JsonResponse(book.to_json())
    except Book.DoesNotExist:
        return JsonResponse({"error": "Book not found"}, status = 404)

