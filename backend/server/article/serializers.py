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
      "is_blocked",
    ]

class CurrentUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]

class UserAccessSerializer(ModelSerializer):
  articles = ArcticleSerializer(many=True, read_only=True)
  user = CurrentUserSerializer(read_only=True)

  class Meta:
    model = UserAccess
    fields =[
      "user",
      "articles",
   ]
    read_only_fields = ('created','updated')

  def create(self, validated_data):
        articles_data = validated_data.pop('articles')
        userAccess = UserAccess.objects.create(**validated_data)
        for article_data in articles_data:
            Article.objects.create(userAccess=userAccess, **article_data)
        return  userAccess


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
