from django.db import models

# Create your models here.

class University(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField()
    city = models.CharField(max_length = 255)
    address = models.TextField()

    def to_json(self):
        return {
            'id' : self.id,
            'name ' : self.name,
            'decription' : self.description,
            'city' : self.city,
            'address' : self.address
        }

class Internship(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    stipend = models.FloatField()
    university = models.ForeignKey(University, on_delete=models.CASCADE,related_name='interships')
    
    def to_json(self):
        return{
            'id' : self.id,
            'title' : self.title,
            'description' : self.decription,
            'stipend' : self.stipend,
            'unversity_id' : self.university.id,
            'university_name' : self.university_name
        }