from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=250, null=True)
    content = models.TextField()

    def __str__(self):
        return self.title
