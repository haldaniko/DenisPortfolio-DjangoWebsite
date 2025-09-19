from django.db import models


class Case(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='cases/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

from django.db import models

class Testimony(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='testimonies/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} — {self.position}"
