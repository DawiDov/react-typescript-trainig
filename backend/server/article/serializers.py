from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import UserAccess, Article, ArticleText, Bonus, Extra


class ArcticleSerializer(ModelSerializer):
  class Meta:
    model = Article
    fields = [
      "pk",
      "title",
      "label",
    ]

class CurrentUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]

class UserAccessSerializer(ModelSerializer):
  user = CurrentUserSerializer(read_only=True)

  class Meta:
    model = UserAccess
    fields ="__all__"


class ArticleTextSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = ArticleText
    fields = [
      "article_id",
      "title",
      "text",
      "text_2",
      "text_3",
      "image_1",
      "image_2",
      "image_3",
    ]

class ExtraSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Extra
    fields = [
      "article_id",
      "title",
      "text",
      "image",
    ]

class BonusSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Bonus
    fields = [
      "article_id",
      "title",
      "text_bonus",
      "image",
      "pdf",
      "meditation",
      "instruction",
    ]
