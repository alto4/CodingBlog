from django.db.models import query
from rest_framework import viewsets

from posts.models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# PRE-REFACTORING: Django Rest Framework viewsets can be used to encapsulate all CRUD operations baked into one queryset
# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

# class PostListView(ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


# class PostDetailView(RetrieveAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


# class PostCreateView(CreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


# class PostUpdateView(UpdateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


# class PostDeleteView(DestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
