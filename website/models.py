from django.db import models


class Case(models.Model):
    title_ru = models.CharField(max_length=255)
    title_ua = models.CharField(max_length=255, blank=True, null=True)
    title_bg = models.CharField(max_length=255, blank=True, null=True)
    title_en = models.CharField(max_length=255, blank=True, null=True)

    description_ru = models.TextField()
    description_ua = models.TextField(blank=True, null=True)
    description_bg = models.TextField(blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)

    image = models.ImageField(upload_to='cases/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title_ru


class Testimony(models.Model):
    name_ru = models.CharField(max_length=255)
    name_ua = models.CharField(max_length=255, blank=True, null=True)
    name_bg = models.CharField(max_length=255, blank=True, null=True)
    name_en = models.CharField(max_length=255, blank=True, null=True)

    position_ru = models.CharField(max_length=255)
    position_ua = models.CharField(max_length=255, blank=True, null=True)
    position_bg = models.CharField(max_length=255, blank=True, null=True)
    position_en = models.CharField(max_length=255, blank=True, null=True)

    text_ru = models.TextField()
    text_ua = models.TextField(blank=True, null=True)
    text_bg = models.TextField(blank=True, null=True)
    text_en = models.TextField(blank=True, null=True)

    image = models.ImageField(upload_to='testimonies/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name_ru
