from django.db import router
from rest_framework import urlpatterns
from posts.api.views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', PostViewSet, basename='posts')
urlpatterns = router.urls

# from django.urls import path

# from .views import PostListView, PostDetailView, PostCreateView, PostUpdateView, PostDeleteView

# urlpatterns = [
#     path('', PostListView.as_view()),
#     path('create/', PostCreateView.as_view()),
#     path('<pk>', PostDetailView.as_view()),
#     path('<pk>/update/', PostUpdateView.as_view()),
#     path('<pk>/delete/', PostDeleteView.as_view()),
# ]
